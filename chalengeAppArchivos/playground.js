var data = {
    "intro":{
        "title": "Welcome to CSS Playground!",
        "description": "Here you´ll learn the basics of CSS such as changing the colors, height and width of objects and styling fonts. Feel free to try anything. If something breaks just press the Reset button and you´ll be fine.",
        "help": "Almost every CSS property is coded first with its name and then the value you want to apply to it. So keep in mind this syntax for the next excercises."
    },

    "colors":{
        "title": "Changing background colors!",
        "description" : "You can change the background color of most elements with the <span class='property'>background-color</span> property. The values that you can use are plain text colors like 'red' or 'black', or use the hexadecimal number that represent them. For example, the number of the color red is #ff0000 and the green´s one is #008000. Try any combination of six numbers and letters from 'a' to 'f' right after a '#' symbol to find any color you want... or use the color picker below.",
        "task": "Try changing the rectangle color to blue with the background-color property.",
        "help": "background-color: blue"
    },

    "resizing":{
        "title": "Resizing Stuff",
        "description": "The base size properties of any element in HTML is its height and width. In CSS this can be modified with the 'height' and 'width' properties and any value with its respective unit. For example, by typing 'width: 20px' and 'height: 45px' the item will be 20 pixels wide and 45 pixels tall. Other units of measurement are percentage (%) and viewport (vh or vw), that will adjust the element to its container and to the device screen, respectively.",
        "task": "Modify the rectangle size as much as you want. Try different units with different values. Keep in mind that if some property is repeated, the one below has the 'final word' and the others will be ignored.",
        "help": "Try width: 30px or height: 50vh"
    },

    "text":{
        "title": "Font Styling",
        "description": "Sometimes you´ll need to add some style to your texts. CSS provides a couple of properties that makes fonts a bit more appealing. To change the color of a text just use the 'color' property with a color value (just like backgrounds), to change its size use 'font-size' and any measurement unit, and to switch between bold and normal fonts just use the 'font-weight' property and any of those two. There are many other text modifiers so we encourage you to do some research and try different things!",
        "task": "Make the text 20px big and change its color to red. Also make it bold.",
        "help": "font-size: 20px  then  color: red  then  font-weight: bold"
    },

    "border":{
        "title": "Box Borders",
        "description": "Borders make things look solid, and sometimes more appealing. Luckily, border properties are simple and easy to use. You can use 'border-style' and values such as 'solid', 'dotted', 'dashed' and many others to change its main structure, 'border-color' to change its color or 'border-width' to increase its size. The width can be set as a specific size (in px or vw, for example) or by using one of the three pre-defined values: thin, medium, or thick.",
        "task": "Try changing this solid border to a dashed one, change its color and make it bigger.",
        "help": "border-style: dashed  then  border-color: red  then border-width: 10px"
    },

    "playground":{
        "title": "Playground time!",
        "description": "It's time for you to experimentate with everything you´ve learned. Now you can choose any of this figures and apply any of the properties used before. Remember, if anything breaks just press the Reset button. Have Fun!",
        "help": ["background-color: <color>", "width: <amount> <unit>", "height: <amount> <unit>", "font-size: <amount><unit>", "color: <color>", "font-weight: <bold, normal, etc.>", "border-style: <dashed, solid, dotted, etc.>", "border-color: <color>", "border-width: <amount><unit>"]
    }
}