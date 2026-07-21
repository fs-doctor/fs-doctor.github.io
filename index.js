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
  <div id="container">
    <div id="content-grid">
    </div>
    <div style="flex: 1; width: 100%;"></div>
    <div style="height: 30vh"></div>
    <div id="board">
      <div id="board-title">
        <h3>公告栏</h3>
      </div>
      <div style="padding-inline: 1vw; padding-block: 1vh; text-indent: 2em;">${board}</div>
    </div>
  </div>`
  const time = document.querySelector("#time")
  const date = new Date()
  const grid = document.querySelector("#content-grid")
  grid.style.gridTemplateColumns = `repeat(${schema.length}, minmax(200px, 1fr))`
  time.innerHTML = `当前日期：${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const select = document.querySelector("#select-grid")
  select.innerHTML = `<option value="day">当天</option>${data.flatMap((d) => {
    return d.time
  }).filter((d1, i, s) => {
    return s.findIndex((d2) => {
      return d1[1] === d2[1]
    }) === i
  }).sort((a, b) => {
    return a[1] - b[1]
  }).map((d) => {
    return `<option value="${d.join(',')}">${d[1]}日</option>`
  }).join("")}`
  select.addEventListener("change", onSelectChangeEvent)
  onSelectChangeEvent({target: {value: "day"}})
})
function onSelectChangeEvent(event) {
  const grid = document.querySelector("#content-grid")
  grid.innerHTML = schema.map((item, index) => {
    return `<div class="p fb center tl tb ${index === schema.length - 1 ? "tr" : ""}">${item.name}</div>`
  }).join("");
  let value = event.target.value
  if (value === "day") {
    const date = new Date()
    value = `${date.getMonth() + 1},${date.getDate()},0`
  }
  const split = value.split(',')
  const filtered = data.filter((d) => d.time.some(s => s[1] === parseInt(split[1])))
  grid.innerHTML += filtered.map((d) => {
    return schema.map((s, index) => {
      return `<div class="p center tl tb ${index === schema.length - 1 ? "tr" : ""}">${s.field === "time" ? (function (times) {
        return times.map((time) => {
          return `${time[0]}月${time[1]}日${time[2] == 0 ? '上午' : time[2] == 1 ? '下午' : '全天'}`
        }).join(',')
      })(d[s.field]) : (d[s.field] ?? "")}</div>`
    }).join("")
  }).join("")
}
