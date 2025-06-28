#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include <DHT.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

// WiFi Credentials
#define WIFI_SSID "nirjal"
#define WIFI_PASSWORD "Nirjal@24"

// Firebase Credentials
#define FIREBASE_HOST "iotp-19b33-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "mot2w09cPU4IAWrV6z9Go19vGMLO5m2mi4kZh7ne"

// Firebase Objects
FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;

// DHT Sensor Configuration
#define DHTPIN D4  
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// NTP Client for Timestamping
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", 19800, 60000);

// Serial Number Counter (persist in EEPROM if needed)
int serialNumber = 0;

// Variables to hold previous readings to avoid duplicates
float prevTemp = NAN;
float prevHumidity = NAN;

void setup() {
  Serial.begin(115200);
  Serial.println("🔧 Initializing system...");

  dht.begin();  
  delay(2000); // Stabilize sensor

  connectWiFi();

  // Firebase Setup
  config.host = FIREBASE_HOST;
  config.signer.tokens.legacy_token = FIREBASE_AUTH;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
  Serial.println("✅ Firebase Initialized!");

  // NTP Client Initialization
  timeClient.begin();
}

void connectWiFi() {
  Serial.print("🔗 Connecting to WiFi");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(1000);
    if (++attempts > 20) {
      Serial.println("\n❌ WiFi connection failed. Restarting ESP...");
      ESP.restart();
    }
  }
  Serial.println("\n✅ WiFi Connected!");
}

void loop() {
  // Maintain WiFi Connection
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("⚠️ WiFi lost. Reconnecting...");
    connectWiFi();
  }

  // Read DHT11 Sensor
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temp) || isnan(humidity)) {
    Serial.println("❌ Failed to read from DHT sensor. Retrying...");
    delay(2000);
    return;
  }

  // Print readings
  Serial.printf("🌡️ Temp: %.2f°C  💧 Humidity: %.2f%%\n", temp, humidity);

  // Update time
  timeClient.update();
  String timestamp = timeClient.getFormattedTime();

  // Check if data has changed before sending
  if (temp != prevTemp || humidity != prevHumidity) {
    Serial.println("📤 New data detected, sending to Firebase...");

    serialNumber++;

    String path = "/sensorData/entry_" + String(serialNumber);
    FirebaseJson json;
    json.set("serial_no", serialNumber);
    json.set("temperature", temp);
    json.set("humidity", humidity);
    json.set("timestamp", timestamp);

    if (Firebase.ready() && Firebase.setJSON(firebaseData, path, json)) {
      Serial.println("✅ Data sent to Firebase successfully!");
      prevTemp = temp;
      prevHumidity = humidity;
    } else {
      Serial.print("❌ Firebase Error: ");
      Serial.println(firebaseData.errorReason());
    }
  } else {
    Serial.println("ℹ️ No data change — skipping update.");
  }

  delay(5000); // Repeat every 5 seconds
}
