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
SELECT
    b.display_name AS 姓名,
    a.normalized_number AS 号码
FROM
    phone_lookup a
INNER JOIN
    raw_contacts b
ON
    a.raw_contact_id=b._id
{% endhighlight %}