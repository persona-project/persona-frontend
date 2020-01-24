`TODOS`
- util.types.isExternal未定义问题
    - 手写原函数?
- highcharts.getOptions未定义问题
- service部分补全
- store部分解决
- 路由守卫
- main 的布局
- 各个chart-card部分
    - layout 里面v-for?
    - 手撸每一个?
--- 
`plan`
```mermaid
gantt
　　　dateFormat　YYYY-MM-DD
　　　title  GANTT Diagram for Persona Mooc Front-end
　　　section Main
　　　Nuxt-lin part　　:active, des1, 2020-01-24,1d
　　　Single page layout 　　　　:active, des2, 2020-01-24, 1d
　　　service part 　　　　:　　　  des3, after des2, 1d
　　　route guard　　　　:　　　  des4, after des3, 1d
   	 vuex part		:		des5,after des2,1d
     add incon	:	des6,after des5,1d
　　　section Bug Fix
　　　util & highcharts undefined 　:crit, active, des7,after des5,1d
　　　#Implement parser and json　　　　　　:crit, done, after des1, 2d
　　　#Create tests for parser　　　　　　　:crit, active, 3d
　　　#Future task in critical line　　　　　:crit, 5d
　　　#Create tests for renderer　　　　　　:2d
　　　#Add to ,mermaid　　　　　　　　　　　:1d
   	 section test
     service test	:active, after des3, 1d
     page test	:active,after des4,1d
```
---
`structure`
