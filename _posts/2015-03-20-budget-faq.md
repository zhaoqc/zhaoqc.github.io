---
layout: post
title: 预算FAQ
description: ""
category: budget
avatarimg: "/img/ecjt.png"
tags : [ budget ]
duoshuo: true
---
###Q:如何添加或者更改预算归口部门
>A:--归口 
>>{% highlight sql %}
select * from B_project_level_line_mapping where PROJECT_LEVEL3_NAME LIKE '%业务招待%'
{% endhighlight %}
###Q:归口部门预算管理员提交无可选路径
A:有可能是归口不对
###Q:预算编制
这是`javascript`
__粗__
###Q:两个部门合并应该修改哪些数据？

A:改所有关于部门的数据
吧year dept表里面的数据增加到要合并到的部门。


###Q:项目在调整中？应该怎么提交呢？
A:重新提交

###Q:查看部门资源

A:--报账部门历史表
`select * from B_DPROJ_DEPT_HIST where DPROJ_HIST_ID='2.013050209353913e+21i'`

--报账部门表
select * from B_DPROJ_DEPT_LIST where  DPROJ_ID='2013042215321442536961i'


###Q:一个合同是5年的，但是第一年就要给二分之一，然后在第三年付清剩余，应该如何立项呢？
A:第一年立一般，第三年立一半，其他年份为0

###Q:增加一行自动

###Q:查看待办是，流程信息不能显示，这是什么原因（该预算有派审流程）？
A:暂时还不知道是什么原因;感觉是没有填写审批意见。

###Q:预算的流程走完了，但是它的状态还是为1，control表里面也没有分配资源？
A:因为是分摊项目
--admin
--接口管理
--分摊项目

###Q:预算系统现在出现一个问题，在提交给省归口预算管理员时，提示ERROR：所选省本部归口预算管理员不在用户列表中。

A:预算状态 0草稿 1流程中 2正常 3流程中撤销 4退回 6调整中 02关闭

###Q:要求让往年项目的资源调整到本年使用
A:往年项目不能调整到本来使用。
###Q:aaaaaa
1
###Q:aaaaaa
1
###Q:aaaaaa
1
###Q:aaaaaa
1
###Q:aaaaaa
1
###Q:aaaaaa
1
###Q:aaaaaa
1