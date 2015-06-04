---
layout: post
title: 获取安卓手机通讯录
description: ""
category: Andriod
avatarimg: "/img/ecjt.png"
tags : [ contacts ]
duoshuo: true
---
###查询语句
{% highlight sql %}
select b.display_name as 名字,a.normalized_number as 号码  from 
(
select raw_contact_id,normalized_number from phone_lookup
)a left join 
(
select _id,display_name from raw_contacts
)b 
on a.raw_contact_id=b._id
group by 名字
{% endhighlight %}