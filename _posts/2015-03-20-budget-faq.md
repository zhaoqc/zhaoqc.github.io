---
layout: post
title: 预算FAQ
description: ""
category: budget
avatarimg: "/img/ecjt.png"
tags : [ budget ]
duoshuo: true
---
###如何添加或者更改预算归口部门
--归口 
{% highlight sql %}
select * from B_project_level_line_mapping where PROJECT_LEVEL3_NAME LIKE '%业务招待%'
{% endhighlight %}
###归口部门预算管理员提交无可选路径
有可能是归口不对
###预算编制


###两个部门合并应该修改哪些数据？

改所有关于部门的数据
吧year dept表里面的数据增加到要合并到的部门。


###项目在调整中？应该怎么提交呢？
重新提交

###查看部门资源

--报账部门历史表
select * from B_DPROJ_DEPT_HIST where DPROJ_HIST_ID='2013050209353913055223i'

--报账部门表
select * from B_DPROJ_DEPT_LIST where  DPROJ_ID='2013042215321442536961i'


###一个合同是5年的，但是第一年就要给二分之一，然后在第三年付清剩余，应该如何立项呢？
第一年立一般，第三年立一半，其他年份为0

###

###查看待办是，流程信息不能显示，这是什么原因（该预算有派审流程）？
暂时还不知道是什么原因

###预算的流程走完了，但是它的状态还是为1，control表里面也没有分配资源？
因为是分摊项目
--admin
--接口管理
--分摊项目

###预算系统现在出现一个问题，在提交给省归口预算管理员时，提示ERROR：所选省本部归口预算管理员不在用户列表中。

预算状态 0草稿 1流程中 2正常 3流程中撤销 4退回 6调整中 02关闭

