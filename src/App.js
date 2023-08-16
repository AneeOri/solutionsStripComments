import "./styles.css";

export default function App() {
  function solution(input, markers) {
    return input
      .split("\n")
      .map((line) =>
        markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
      )
      .join("\n");
  }

  function solution2(input, markers) {
    return input
      .split("\n")
      .map((line) =>
        markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
      )
      .join("\n");
  }

  function solution3(input, markers) {
    return input.replace(new RegExp(`\\s*[${markers.join("|")}].+`, "g"), "");
  }

  function solution4(input, markers) {
    var lines = input.split("\n");
    for (var i = 0; i < lines.length; ++i)
      for (var j = 0; j < markers.length; ++j)
        lines[i] = lines[i].split(markers[j])[0].trim();
    return lines.join("\n");
  }

  function solution5(input, markers) {
    //`RegExp(..)` has some reasonable utility: to dynamically define the pattern for a regular expression.
    //https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md#object-function-and-regexp
    var pattern = new RegExp("[" + markers.join("") + "]");

    return input
      .split("\n")
      .map(function (a) {
        return a.split(pattern)[0].trim();
      })
      .join("\n");
  }

  function solution6(input, markers) {
    return input
      .split("\n")
      .map((row, index) => {
        markers.map((mark) => {
          let pos = row.indexOf(mark) != -1 ? row.indexOf(mark) : null;
          row = pos ? row.slice(0, pos) : row;
        });

        return row.trim();
      })
      .join("\n");
  }

  function solution7(input, markers) {
    return input.replace(/(\s\W\w+).*|(\s\W\s?\w+\s?\w+)/g, "");
  }

  function solution8(input, markers) {
    return input
      .replace(/.+\/\/| [@$%#].+|\and .+/g, "")
      .replace(/ [!-].+/g, "");
  }

  return (
    <div className="App">
      <input />
    </div>
  );
}
