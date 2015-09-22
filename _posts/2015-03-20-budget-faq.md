---
layout: post
title: 预算运维常见问题
description: ""
category: budget
avatarimg: "/img/ecjt.png"
tags : [ FQA ]
duoshuo: false
---
###Q:如何添加或者更改预算归口部门
>A:--归口 
>>{% highlight sql %}
select * from B_project_level_line_mapping where PROJECT_LEVEL3_NAME LIKE '%业务招待%'
{% endhighlight %}

###Q:归口部门预算管理员提交无可选路径

>A:有可能是归口不对

###Q:预算编制

>>这是`javascript`__粗__

###Q:两个部门合并应该修改哪些数据？

>A:改所有关于部门的数据
>>吧year dept表里面的数据增加到要合并到的部门。


###Q:项目在调整中？应该怎么提交呢？
>A:不需要，调整中说明已经在审核了

###Q:查看部门资源

>A:--报账部门历史表
{% highlight sql %}
select * from B_DPROJ_DEPT_HIST where DPROJ_HIST_ID=''
{% endhighlight %}
>A:--报账部门表
{% highlight sql %}
select * from B_DPROJ_DEPT_LIST where  DPROJ_ID=''
{% endhighlight %}

###Q:一个合同是5年的，但是第一年就要给二分之一，然后在第三年付清剩余，应该如何立项呢？
>A:第一年立一般，第三年立一半，其他年份为0

###Q:查看待办是，流程信息不能显示，这是什么原因（该预算有派审流程）？
>A:暂时还不知道是什么原因;感觉是没有填写审批意见。

###Q:预算的流程走完了，但是它的状态还是为1，control表里面也没有分配资源？
>A:因为是分摊项目

>>--admin

>>--接口管理

>>--分摊项目

###Q:预算系统现在出现一个问题，在提交给省归口预算管理员时，提示ERROR：所选省本部归口预算管理员不在用户列表中。

>A:需要调整该表
{% highlight sql %}
select * from EBPM_APPROVAL_CONFIG where BUSINESS_ID='2015033013455335562751i'
{% endhighlight %}

###Q:在提交给省本部预算管理员时，提示ERROR：所选省本部归口预算管理员不在用户列表中。

    `PROV_LINE_MANAGER` 省公司归口
    `COMP_LINE_MANAGER` 公司归口
    应该是代码有问题，`COMP_LINE_MANAGER` 居然是空的

###Q:预算状态分别代表什么
    
>>0草稿
    
>>1流程中 

>>2正常 

>>3流程中撤销 

>>4退回 

>>6调整中

>>>预算在调整后提交并在流程流程中。
    
>>7目前不明

>>02关闭

###Q:要求让往年项目的资源调整到本年使用

>A:往年项目不能调整到本来使用。

###Q:合同在报销时没有可用资源

>A:检查预算资源

###Q:新成立部门需要那些东西？

>A:部门ID，部门经理、副经理、预算管理员

###Q:部门科目资源有重复的，一个总资源为0，一个总资源为14000万，且可用资源为负数？

>A: 在页面获取index_id ，执行SQL语句
{% highlight sql %}
SELECT * FROM B_BUDGET_INDEX where  index_id = ‘’
{% endhighlight %}

###Q:如何冻结一个项目的资源？

>A:copy control表的数据到freezing表

###Q:年度表是哪个表呢？

>A: `B_BUDGET_YEAR_DEPT` 部门科目资源下达明细 `B_BUDGET_INDEX`部门总资源 ` B_BUDGET_MAIN`分公司资源下达到部门

###Q:新成立部门的成本中心ID是有谁提供？或者在哪里可以取道？
>A:由经办人提供，部门成立应该先找分公司提供部门代码，然后又财务提供成本中心段ID。

###Q:起草人预算提交时不经过部门预算管理员，直接提交给了部门领导

>A:原因是起草人以前是预算管理员，在角色管理中删除该帐号的预算管理员权限就可以了