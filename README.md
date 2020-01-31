# PIZZA PARLOR
#### This web application, hosted on [GitHub Pages](https://kristarutz.github.io/Beep-Boop/), takes a number from a user and returns a range of numbers from 0 to the user inputted number, with some exciting exceptions.
_Last updated: 01/24/2020_

### _By **Krista Rutz**_

## Description

This web application allows the user to enter a number from 0 to 1000. It then prints a list of the numbers from 0 to the user's chosen number, inclusive. However, certain rules replace numbers containing the digits 1, 2, or 3 with _"Beep!"_, _"Boop!"_, and _"I'm sorry, Dave. I'm afraid I can't do that."_, respectively.

## Installation / Set-up

This app is ready to run at this url:
https://kristarutz.github.io/Beep-Boop/

You can also download the ZIP file to run this program without internet.
* Select "Clone or Download" on the [GitHub Repository](https://github.com/KristaRutz/Beep-Boop.git) site > Download ZIP
* Open the ZIP download and extract files.
* The new folder will be created as "Beep-Boop" unless you change this setting. In this folder, select the index.html document.
* Choose "Open With" > Google Chrome or another browser of your choice.
* The website is now ready to use!

## Technologies Used

* JavaScript and jQuery
* Custom CSS and responsive design using Bootstrap framework
* HTML

## Specifications
<details>
  <summary>Expand specs for this project</summary>

* **Spec**: The program returns an error message when the inputted number is out of range.
  * **Input**: "-4"
  * **Output**: "Value must be greater than or equal to 0."  
  
* **Spec**: The program returns a range of numbers from 0 to the users inputted number
  * **Input**: "4"
  * **Output**: "0, 1, 2, 3, 4"
* **Spec**: The program can be re-used to show new results
  * **Input**: "4" => GO , "2" => GO
  * **Output**: "0, 1, 2, 3, 4" => "0, 1, 2"
* **Spec**: The program returns "I'm sorry Dave, I'm afraid I can't do that" in place of numbers that contain the digit "3"
  * **Input**: "4"
  * **Output**: "0, 1, 2, "I'm sorry Dave, I'm afraid I can't do that", 4"
* **Spec**: The program returns "Boop!" in place of numbers that contain the digit "2"
  * **Input**: "4"
  * **Output**: "0, 1, "Boop!", "I'm sorry Dave, I'm afraid I can't do that", 4"
* **Spec**: The program returns "Beep!" in place of numbers that contain the digit "1"
  * **Input**: "4"
  * **Output**: "0, "Beep!", "Boop!", "I'm sorry Dave, I'm afraid I can't do that", 4"
* **Spec**: The program allows the user to reset the form
  * **Input**: Clicks reset
  * **Output**: Form is reset and the output display is empty
#### Further Exploration
* **Spec**: The program will allow the user to enter "game mode"
  * **Input**: Click Game mode
  * **Output**: Game mode is toggled.
* **Spec**: "Game mode" brings up buttons for the user to choose from
  * **Input**: "Toggle Game mode"
  * **Output**: Button selection is displayed: #, beep, boop, "sorry"
* **Spec**: The program displays "0" and outputs true when user selects 0.
  * **Input**: "0"
  * **Output**: "correct"
* **Spec**: The program displays "0" and outputs false when user selects !0.
  * **Input**: "Beep!"
  * **Output**: "Beep!"
* **Spec**: The program displays "1" when user clicks next.
  * **Input**: Clicks next
  * **Output**: Game display reset & next "number" appears
* **Spec**: The program displays "1" and outputs true when user selects "beep".
  * **Input**: "beep"
  * **Output**: "correct"
* **Spec**: The program displays "1" and outputs false when user selects "1".
  * **Input**: "1"
  * **Output**: "wrong"
* **Spec**: The program displays "2" and outputs true when user selects "boop".
  * **Input**: "boop"
  * **Output**: "correct"
* **Spec**: The program displays "2" and outputs false when user selects "2" or "beep".
  * **Input**: "2"
  * **Output**: "wrong"
* **Spec**: The program displays lives and levels. False levels cause loss of life
  * **Input**: Incorrect answer
  * **Output**: Lives--
</details>

## Known Bugs

No known bugs.

## Support and contact details

Please contact me if you run into any issues or have questions, ideas or concerns.  I can be contacted at <krista.rutz@pomona.edu>. Feel free to create a pull request for updates - _contributions to the code are encouraged!_

## Usage and Licensing

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Krista Rutz_**

<details>
  <summary>View license details</summary>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</details>