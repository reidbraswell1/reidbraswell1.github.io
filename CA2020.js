function centerHeadings() {
  // CONSTANTS
  const H1 = "H1";
  const TEXT_ALIGN = "center";

  // Get the objects from the DOM
  let headings = document.getElementsByTagName(H1);

  // Center Headings
  for (const heading of headings) {
    if (heading.nodeName === H1) {
      heading.style.textAlign = TEXT_ALIGN;
    }
  }
}

function justifyParagraphs() {
  // CONSTANTS
  const P = "P";
  const JUSTIFY = "justify";
  const EM = "1.5em";
  const THEME_COLOR = "theme-color";

  // Get the objects from the DOM
  let paragraphs = document.getElementsByTagName(P);

  // Justify paragraph text
  for (const paragraph of paragraphs) {
    if (paragraph.nodeName === P) {
      paragraph.style.textAlign = JUSTIFY;
      if (paragraph.id != THEME_COLOR) {
        paragraph.style.textIndent = EM;
      }
    }
  }
}

function floatImages(direction) {
  // CONSTANTS
  const I = "IMG";

  // Get the images from the DOM
  let images = document.getElementsByTagName(I);

  // Justify paragraph text
  for (const image of images) {
    if (image.nodeName === I) {
      image.style.float = direction;
    }
  }
}


function getRandomForegroundBackgroundColor() {
  // CONSTANTS
  const BODY = "body";
  const THEME_COLOR = "theme-color"
  const READABILITY_INDEX = 7.7;

  // DECLARE VARIABLES
  let readability;
  let randomForegroundColor;
  let randomBackgroundColor;

  // Loop until readability is greater than READABILITY_INDEX
  do {
    //let hexColor = "#000000".replace(/0/g,function() { return (~~(Math.random() * 16)).toString(16);});
    //let randomColor = tinycolor(hexColor);
    let randomColor = tinycolor.random();
    randomColor.setAlpha(1);
    randomForegroundColor = randomColor.toHexString();
    randomBackgroundColor = randomColor.complement().toHexString();
    readability = tinycolor.readability(`${randomForegroundColor}`, `${randomBackgroundColor}`, {});
  } while (readability < READABILITY_INDEX);


  // Setup theme text paragraph
  let foregroundThemeRGB = `Foreground = ${tinycolor(randomForegroundColor).toRgbString()}`
  let foregroundThemeHex = `Hex = ${randomForegroundColor}`
  let backgroundThemeRGB = `Background = ${tinycolor(randomBackgroundColor).toRgbString()}`
  let backgroundThemeHex = `Hex = ${randomBackgroundColor}`

  // Get the objects from the DOM
  let body = document.getElementById(BODY);
  let themeColor = document.getElementById(THEME_COLOR);

  // Set the new style for the page
  body.style.color = `${randomForegroundColor}`;
  body.style.backgroundColor = `${randomBackgroundColor}`;
  themeColor.innerHTML = `${foregroundThemeRGB}, ${foregroundThemeHex}<br/>${backgroundThemeRGB}, ${backgroundThemeHex}<br/>Readability Index = ${readability}`
  body.style.fontWeight = "bold";
}
