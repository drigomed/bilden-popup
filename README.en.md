# Bilden Popup

Extension for Qlik Sense that enables the display of modal windows (pop-ups) over the dashboard, supporting both static HTML content and the display of a specific sheet from the application.

> Developed by [Rodrigo Martins - Bilden](https://bildennegocios.com/)  
> Compatible with Qlik Cloud and Qlik Sense On-Premise

---

## 📌 Overview

**Bilden Popup** is a visual extension designed to enhance the user experience in Qlik Sense by allowing:

- Displaying contextual **help**, **instructions**, **tutorials**, **secondary panels**, **documentation**, or any other complementary material without leaving the current view.
- Embedding **custom HTML content** (images, text, PDF, iframe, etc.) or loading a specific **sheet** from the app.
- Customizing the button’s position, icon, label, and popup behavior.

---

## 🚀 Features

- ✅ Supports **custom HTML**, with Qlik expression evaluation.
- ✅ Option to load a **sheet** from the same app.
- ✅ Supports **fixed positioning** for the trigger button (top/right).
- ✅ Optional **selection bar** inside the popup.
- ✅ Support for custom icons on the trigger button.
- ✅ Compatible with **Qlik Cloud** and **Qlik Sense Client-Managed**.

---

## 🔎 Examples

Fixed position – the button is positioned according to the (top/right) settings:

![Fixed position example](https://raw.githubusercontent.com/drigomed/bilden-popup/refs/heads/main/img/demoPosicaoFixa.png)

Without fixed positioning (button appears inside the component area):

![Relative position example](https://raw.githubusercontent.com/drigomed/bilden-popup/refs/heads/main/img/demoPosicaoVariavel.png)

Static HTML content (in this case, an image):

![HTML example](https://raw.githubusercontent.com/drigomed/bilden-popup/refs/heads/main/img/demoHTML.png)

Sheet content (a sheet with app filters loaded inside the popup):

![Sheet example](https://raw.githubusercontent.com/drigomed/bilden-popup/refs/heads/main/img/demoSheet.png)

---

## 🔧 Configuration Parameters

| Field                       | Description                                                                    |
|----------------------------|--------------------------------------------------------------------------------|
| `Pop-up ID`                | Unique ID per sheet — used internally.                                         |
| `Popup Title`              | Title displayed at the top of the popup window.                               |
| `Show selection bar?`      | Enables or disables the selection bar inside the popup.                        |
| `Button icon`              | Icon displayed on the trigger button.                                          |
| `Button label`             | Text shown on the button.                                                      |
| `Fixed position?`          | Enables absolute positioning for the trigger button.                           |
| `Button position (right)`  | Distance from the right edge, in pixels.                                       |
| `Button position (top)`    | Distance from the top edge, in pixels.                                         |
| `Show sheet?`              | Determines whether to show a sheet or HTML content.                            |
| `Select sheet to load`     | Sheet to be displayed in the popup (when sheet mode is enabled).               |
| `HTML Content`             | HTML content to render inside the popup. Supports images, iframes, PDFs, etc.  |

![HTML configuration](https://raw.githubusercontent.com/drigomed/bilden-popup/refs/heads/main/img/configHTML.png)  
![Sheet configuration](https://raw.githubusercontent.com/drigomed/bilden-popup/refs/heads/main/img/configSheet.png)

---

## 📂 Installation

### For Qlik Cloud:
1. Go to the **Management Console**.
2. Open **Extensions** and click **Add**.
3. Upload the extension `.zip` file.

👉 See the [official documentation](https://help.qlik.com/pt-BR/cloud-services/Subsystems/Hub/Content/Sense_Hub/Admin/mc-extensions.htm).

### For Qlik Sense On-Premise:
1. Go to the **Qlik Management Console (QMC)**.
2. Open **Extensions > Import**.
3. Select the extension `.zip` file and click **Import**.

👉 See the [official documentation](https://help.qlik.com/en-US/sense-admin/May2025/Subsystems/DeployAdministerQSE/Content/Sense_DeployAdminister/QSEoW/Administer_QSEoW/Managing_QSEoW/import-extensions.htm)

---

## 🛠 Development

This extension was developed using the [qExt](https://github.com/axisgroup/qExt) package, which streamlines the creation, packaging, and deployment of Qlik Sense extensions.  
The folder structure and scripts are based on the official `qExt` template and can be customized as needed.  
More information: https://github.com/axisgroup/qExt
