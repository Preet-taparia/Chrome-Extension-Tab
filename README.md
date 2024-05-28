# Tab Manager Chrome Extension

## Overview

Tab Manager is a Chrome extension built using React and React Bootstrap. This extension allows users to view the title of the current active tab and lists all open tabs in the current window. Users can switch between tabs by clicking on the tab titles listed in the extension popup.

## Features

- **View Current Tab Title:** Click a button to fetch and display the title of the current active tab.
- **List All Open Tabs:** Display a list of all open tabs in the current window.
- **Switch Between Tabs:** Switch to any tab by clicking its title in the list.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Preet-taparia/Chrome-Extension-Tab.git
   cd Chrome-Extension-Tab
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```
   
   or

   ```bash
   yarn
   ```

3. **Build the project:**

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn run build
   ```

4. **Load the extension in Chrome:**

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle switch in the top right.
   - Click "Load unpacked" and select the `build` folder inside your project directory.

## Usage

1. Click the Tab Manager icon in the Chrome toolbar to open the popup.
2. Click the "Get Current Tab Title" button to fetch and display the title of the current active tab.
3. View the list of all open tabs in the current window.
4. Click any tab title in the list to switch to that tab and update the displayed title.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Bootstrap**: React components for Bootstrap.
- **Bootstrap**: CSS framework for styling.
