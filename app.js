const rung = document.getElementById("rung");
const state = { X1: false };
const items = [
  { type: "contact", label: "X1" },
    { type: "coil", label: "Y1" }
    ];

    function div(cls) {
      const d = document.createElement("div");
        d.className = cls;
          return d;
          }

          function power() {
            return state.X1;
            }

            function render() {
              rung.innerHTML = "";
                const on = power();
                  rung.appendChild(div("rail"));
                    rung.appendChild(div("wire" + (on ? " live" : "")));
                      items.forEach(function (it) {
                          const box = div("element");
                              let active = false;
                                  if (it.type === "contact") {
                                        active = state[it.label];
                                              box.textContent = "| |";
                                                    box.onclick = function () {
                                                            state[it.label] = !state[it.label];
                                                                    render();
                                                                          };
                                                                              } else {
                                                                                    active = on;
                                                                                          box.textContent = "( )";
                                                                                              }
                                                                                                  if (active) box.classList.add("active");
                                                                                                      const tag = document.createElement("small");
                                                                                                          tag.textContent = it.label;
                                                                                                              box.appendChild(tag);
                                                                                                                  rung.appendChild(box);
                                                                                                                      rung.appendChild(div("wire" + (on ? " live" : "")));
                                                                                                                        });
                                                                                                                          rung.appendChild(div("rail"));
                                                                                                                          }

                                                                                                                          render();