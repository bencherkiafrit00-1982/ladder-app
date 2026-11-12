const rung = document.getElementById("rung");

// rung elements
const elements = [
  { type: "contact", label: "X1" },
    { type: "coil", label: "Y1" }
    ];

    function makeDiv(className) {
      const d = document.createElement("div");
        d.className = className;
          return d;
          }

          function render() {
            rung.innerHTML = "";

              rung.appendChild(makeDiv("rail"));
                rung.appendChild(makeDiv("wire"));

                  elements.forEach((el) => {
                      const box = makeDiv("element");
                          box.innerHTML = "<small>" + el.label + "</small>" + (el.type === "contact" ? "| |" : "( )");
                              rung.appendChild(box);
                                  rung.appendChild(makeDiv("wire"));
                                    });

                                      }

                                      render();