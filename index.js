document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    root.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-around; background-color: rgb(223, 131, 68); border: 1px solid black;">
        <h5 id="time" style="display: flex; align-items: center; justify-content: end;">
        </h5>
        <div style="display: flex; justify-content: center;">
        <h3>专家门诊安排</h3>
        </div>
        <div style="display: flex; justify-content: start;">
        <h4 style="margin: 0; padding: 0;">筛选：</h4><select id="select-grid">
        </select>
        </div>
    </div>
    <div id="board"></div>
    <div style="display: flex; align-items: center; justify-content: space-around; background-color: rgb(223, 131, 68); border: 1px solid black;">
        <h3 style="margin-block: 1vh;">上午</h3>
    </div>
    <div class="container">
        <div class="content-grid">
        </div>
        <div style="flex: 1; width: 100%;"></div>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-around; background-color: rgb(223, 131, 68); border: 1px solid black;">
        <h3 style="margin-block: 1vh;">下午</h3>
    </div>
    <div class="container">
        <div class="content-grid">
        </div>
        <div style="flex: 1; width: 100%;"></div>
    </div>`;
    const time = document.querySelector("#time");
    const date = new Date();
    const boardDiv = document.querySelector("#board");
    if (board != "") {
        for (let _ = 0; _ < 2; _++) {
            const idiv = document.createElement("div");
            idiv.classList.add("board-inline");
            idiv.innerHTML = board + "&nbsp;".repeat(20);
            boardDiv.appendChild(idiv);
        }
    }
    document.querySelectorAll(".content-grid").forEach((grid) => {
        grid.style.gridTemplateColumns = `repeat(${schema.length}, minmax(200px, 1fr))`;
    });
    time.innerHTML = `当前日期：${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const select = document.querySelector("#select-grid");
    select.innerHTML = `<option value="day">当天</option>${data
        .flatMap((d) => {
            return d.time;
        })
        .filter((d1, i, s) => {
            return (
                s.findIndex((d2) => {
                    return d1[1] === d2[1];
                }) === i
            );
        })
        .sort((a, b) => {
            return a[1] - b[1];
        })
        .map((d) => {
            return `<option value="${d.join(",")}">${d[0]}月${d[1]}日</option>`;
        })
        .join("")}`;
    select.addEventListener("change", onSelectChangeEvent);
    onSelectChangeEvent({ target: { value: "day" } });
});
function onSelectChangeEvent(event) {
    const grids = document.querySelectorAll(".content-grid");
    grids.forEach((grid) => {
        grid.innerHTML = schema
            .map((item, index) => {
                return `<div class="p fb center tl tb ${index === schema.length - 1 ? "tr" : ""}">${item.name}</div>`;
            })
            .join("");
    });
    let value = event.target.value;
    if (value === "day") {
        const date = new Date();
        value = `${date.getMonth() + 1},${date.getDate()},0`;
    }
    const split = value.split(",");
    const filtered = data.filter((d) =>
        d.time.some((s) => s[1] === parseInt(split[1])),
    );
    const morningfiltered = filtered.filter((d) =>
        d.time.some((s) => s[2] === 0 || s[2] === 2),
    );
    const afternoonfiltered = filtered.filter((d) =>
        d.time.some((s) => s[2] === 1 || s[2] === 2),
    );
    const funcmap = (d) => {
        return schema
            .map((s, index) => {
                return `<div class="p center tl tb ${index === schema.length - 1 ? "tr" : ""}">${
                    s.field === "time"
                        ? (function (times) {
                              return times
                                  .map((time) => {
                                      return `${time[0]}月${time[1]}日`;
                                  })
                                  .join("<br>");
                          })(d[s.field])
                        : (d[s.field] ?? "")
                }</div>`;
            })
            .join("");
    };
    grids[0].innerHTML += morningfiltered.map(funcmap).join("");
    grids[1].innerHTML += afternoonfiltered.map(funcmap).join("");
}
