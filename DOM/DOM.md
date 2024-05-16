#### DOM Note
- $0 variable - special variable for debugging and inspection
- Text node
  - `$0.textContent`
- Attribute node
  - `$0.getAttribute('class')`
  - `$0.setAttribute('class', 'hello')`
- Comment node
  - `document.getElementById('div').childNodes[3]`
  - `document.getElementById('div').childNodes[3].nodeValue`
- Document type node (Access from <!DOCTYPE html>)
  - `$0.nodeType`

#### Manipulate DOM elements

1. `document.getElementById` - Access html element using a unique ID
2. `document.getElementByClassName` - Access multiple html element sharing the same class name
3. `document.getElementsByTagName` - Access multiple html elements with the same tag'
4. `document.querySelector` - Access html element using css like selectors