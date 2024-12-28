---
title: el-date-picker所选的时间不能超过当前时间（精确到时分秒）
category:
  - 前端
tag:
  - js
  - element-ui
---

<!-- more -->

### 功能
<code>el-date-picker</code>限制所选的时间不能超过当前时间，为了实时更新所选的日期，<code>pickerOptions</code>定义在<code>computed</code>计算属性里面

```vue
<template>
  <el-date-picker
    v-model="recDate" 
    type="datetime" 
    value-format="yyyy-MM-dd HH:mm:ss"
    placeholder="选择日期时间"
    :picker-options="pickerOptions"
  >
  </el-date-picker>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      recDate: null
    };
  },
  computed: {
    pickerOptions() {
      return {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        selectableRange: (() => {
          const selectDay = moment(this.recDate).format('YYYY-MM-DD')
          const currentDay = moment().format('YYYY-MM-DD')
          if (currentDay > selectDay) {
            return `00:00:00 - 23:59:59`
          } else {
            const timeNow = moment(this.currentTime).format('HH:mm:ss')
            return `00:00:00 -${timeNow}`
          }
        })()
      }
    }
  }
}
</script>
```
