# Pre-work - _Memory Game_

**Animal Sound Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Chami Sagara**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/edit/#!/spectacled-crawling-emmental)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess (after 3 strikes)

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Pause and unpause feature that saves current progress while allowing for temporary break

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:


Showing a full victory
![](https://cdn.glitch.global/63429d76-9684-4866-b15e-6c99902f15a0/Success.gif?v=1648869297401)
Showing a loss after 3 strikes due to mistakes and timer running out
![](https://cdn.glitch.global/63429d76-9684-4866-b15e-6c99902f15a0/Defeat.gif?v=1648869296972)
Showing the pausing, unpausing, and stopping features as well as new random pattern generated for a new game
![](https://cdn.glitch.global/63429d76-9684-4866-b15e-6c99902f15a0/PausingAndResumingAndStopping.gif?v=1648869297042)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   In addition to the prework guidelines provided by CodePath, I found it incredibly useful to utilize outside resources to help me with this webpage project. All prior knowledge of JavaScript programming was from Nick Morgan’s instructional book, JavaScript for Kids, which was a huge help in providing me with the fundamental building blocks for the language. Throughout the entire project, GeeksForGeeks.com was a vital resource for me as it allowed me to better understand the connection between HTML components and the underlying JavaScript that allowed for the interaction between the two. I also used ProgrammingHead.com, which was provided in the prework instructions, as a tutorial to help me understand how to add custom audio to the website by utilizing the HTML to import the audio source and then using JavaScript to control the audio’s playback.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   The major challenge I encountered when creating this webpage was understanding how to implement a timer that would consistently decrement every second in my code, display this decrementing process on the webpage itself, and cause the player to gain a strike on the game when it reached zero.

   I started by creating a section in the HTML where the timer would display and initializing its value to be “0:10”. At first, I felt lost because I could think of no way to maintain such a dynamic element on an otherwise very static webpage. However, I later remembered that by following the prework tutorial, I had already written code demonstrating the possibility of delaying a function from running by using the native *setTimeout()* function in JavaScript. Thus, I sought to find a function that would repeat consistently until I asked it to stop. I found it in the form of the native *setInterval()* function.

   I learned that *setInterval* would call the function parameter passed to it at an interval of time that was also passed to it as a parameter. So, I initialized a time variable at 10 and created a function that decremented this variable by one until it reached zero. Then, I created my interval variable and initialized it to run this function every thousand milliseconds, equivalent to one second. I placed this variable in my *startGame()* function so it would run when the game began, but I soon encountered my second problem: the timer began running while the computer was still playing the sounds. To solve this, I had to combine the *setTimeout()* function and *setInterval()* functions into one so that the interval variable only began running after the computer had played all the sounds for that pattern.

   The final part of implementing the timer involved adding a strike if the time limit expired while the user was still guessing. To accomplish this, inside of my timer decrementing function, I called my *addStrike()* function if the timer was at 0. There, my strike handler function could add a strike or end the game fully. Based on whether the user entered the pattern correctly or not, the “clearInterval()”  function would stop the interval from continuing to run after. Eventually, through intense amounts of planning and accounting for every possible circumstance, I was able to implement my timer successfully.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   After completing this submission, I have found many of my previous questions about web development to be answered or at the very least more understandable to me. I now understand that HTML can be used to present the user with the webpage elements, CSS can be used to change the way the elements appear on the webpage, and JavaScript can be used to add interactivity. However, I still do have questions about web development that continue to interest me.

   First, what are ways that websites can improve their speed and load times so that the overall user experience becomes more streamlined and the website can offer better user engagement? I believe that using smaller assets on the webpage itself would likely reduce load times, but I am fascinated to learn what algorithms or principles can be implemented in web development that would lead to better website responsiveness.

   Next, how important of a role do browsers play in web development with regards to a website’s compatibility for the wide range of users accessing the website? I have experienced certain websites being better suited for Chrome than for Firefox, specifically the page’s appearance and how long it takes to render the information. I believe it is important to understand how webpages can act so differently based on the user’s browser.

   Finally, for e-commerce websites such as Amazon or eBay, how are web developers able to combine the front-end user interface with the back-end SQL database that handles the product listings? Given that I have learned about how HTML, CSS, and JavaScript can all be utilized at once to create an interactive website, I am interested to know how this next step can be taken to create more challenging websites that extend the interactivity even further.



4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   I am proud of the effort I put into completing this project and accomplishing all the goals I set out for myself during this prework. That being said, I believe in constantly pushing myself and striving for improvement. So, if I were to have a few more hours to work on this project, I would find it best to spend this additional time improving my current sound system and preventing user cheating during the game.

   Although my webpage functions as intended currently, I believe selecting audio clips that are shorter and more distinguishable as being a particular animal’s sound would significantly improve the user experience. Currently, the sounds I have chosen are of varying lengths and as a result, some sounds finish playing faster than others, even when the sounds are been sped up as the rounds go on. Thus, using additional time to find more consistent sources of audio would allow for more consistency throughout the gameplay and improve the user experience by removing unnecessary delays in the animal audio.

   A new feature I would add to my game is the ability to prevent user input while the computer is still playing the pattern. While a fair game would imply the user waits until the computer finishes the pattern and attempts to replicate it as best as they can, as a programmer, one must prepare for all possible situations. One of the possible situations is that that player attempts to cheat by playing each pattern element immediately after the computer plays it. This can be mitigated by preventing the computer from detecting the user’s input while the computer is still playing the sounds. This would likely utilize the “setTimeout()” function, and if I had more time, I would have loved to solve this problem.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/2ef94dc821ba435b8659ded08a5a215e)


## License

    Copyright [Chami Sagara]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
