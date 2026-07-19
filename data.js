const schema = [
  {
    field: "clinic",
    name: "专家门诊"
  },
  {
    field: "name",
    name: "专家"
  },
  {
    field: "hospital",
    name: "所属医院"
  },
  {
    field: "job",
    name: "职称"
  },
  {
    field: "room",
    name: "诊室"
  },
  {
    field: "week",
    name: "门诊时间"
  },
  {
    field: "time",
    name: "具体出诊时间"
  }
]
const data = [
  {
    clinic: "中医针推伤科",
    name: "彭永华",
    hospital: "金山区朱泾社区卫生服务中心",
    job: "主任医师",
    room: "一楼针推伤科门诊2诊室",
	week: "每周六下午",
    time: [[7, 4, 1],[7, 11, 1],[7, 18, 1],[7, 25, 1]],
  },
  {
    clinic: "中医针推伤科",
    name: "徐冲",
    hospital: "松江区方塔中医医院",
    job: "主治医师",
    room: "一楼针推伤科门诊2诊室",
	week: "隔周二下午",
    time: [[7, 14, 1],[7, 28, 1]],
  },
  {
    clinic: "中医皮肤科",
    name: "李苏",
    hospital: "上海市岳阳中西医结合医院",
    job: "副主任医师",
    room: "一楼中医皮肤科诊室",
	week: "周五上午",
    time: [[7, 24, 0]]
  },
  {
    clinic: "中医皮肤科",
    name: "马天",
    hospital: "上海市岳阳中西医结合医院",
    job: "副主任医师",
    room: "一楼中医皮肤科诊室",
	week: "周五上午",
    time: [[7, 10, 0]]
  },
  {
    clinic: "皮肤科",
    name: "陈欢欢",
    hospital: "交医附属松江医院",
    job: "主治医师",
    room: "一楼中医皮肤科诊室",
	week: "周三下午",
    time: [[7, 1, 1],[7, 8, 1],[7, 15, 1],[7, 22, 1],[7, 29, 1]]
  },
  {
    clinic: "皮肤科",
    name: "倪晓青",
    hospital: "交医附属松江医院",
    job: "主治医师",
    room: "一楼中医皮肤科诊室",
	week: "周二上午",
    time: [[7, 7, 0],[7, 14, 0],[7, 21, 0],[7, 28, 0]]
  },
  {
    clinic: "中医内科",
    name: "刘群",
    hospital: "上海长海医院",
    job: "副主任医师",
    room: "一楼中医内科门诊",
	week: "周日上午",
    time: [[7, 12, 0],[7, 26, 0]]
  },
  {
    clinic: "名中医工作室",
    name: "五要吃",
    hospital: "上海市第六人民医院",
    job: "主任亦是",
    room: "一楼针腿上课们正201是",
    time: [[7, 18, 1]]
  },
  {
    clinic: "名中1医1工1作1室",
    name: "五要吃",
    hospital: "上海市第六人民医院",
    job: "主任亦是",
    room: "一楼针腿上课们正201是",
    time: [[7, 26, 1]]
  },
]
