# ♻️ Plastic Scanner (Flutter Web)

A web-based AI application that uses a camera and machine learning to identify whether a plastic object is **Recyclable** or **Non-Recyclable**.

Built using **Flutter Web** and **TensorFlow.js**, with a model trained using **Google Teachable Machine**.

---

## 🚀 Features

- 📷 Camera-based plastic scanning
- 🤖 Machine Learning classification
- 🌍 Runs directly in the browser
- ⚡ Built with Flutter Web
- 🧠 TensorFlow.js + Teachable Machine model
- 🎯 Confidence-based prediction with “Uncertain” state
- 📱 Responsive UI

---

## 🛠️ Tech Stack

- **Flutter (Web)**
- **Dart**
- **TensorFlow.js**
- **Teachable Machine**
- **HTML / JavaScript**

---

## 📁 Project Structure

```text
lib/
 └─ main.dart

web/
 ├─ index.html
 ├─ predict.js
 └─ model/
    ├─ model.json
    ├─ metadata.json
    └─ weights.bin
```



---
##🔍How It Works

1. User opens the web application  
2. Camera captures an image of plastic  
3. TensorFlow.js loads the trained model  
4. The image is classified into:
   - Recyclable  
   - Non-Recyclable  
5. Result is displayed with confidence percentage  

---

##Acknowledgements

- Flutter  
- TensorFlow.js  
- Google Teachable Machine  
