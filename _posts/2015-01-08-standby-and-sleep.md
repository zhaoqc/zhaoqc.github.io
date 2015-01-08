---
layout: post
title: [Linux下休眠/待机命令 ]
date: 2015-01-08 00:50 AM 
description: "Linux下休眠/待机命令"
category: Linux
avatarimg: "/img/ecjt.png"
tags : [ command ]
duoshuo: true
---
在作之前，先检查一下你的内核能支持哪些方式：

    # cat /sys/power/state
    
    standby disk
###1. 睡眠 (sleep)

    睡眠可能有两种方式：mem和standby，这两种方式都是suspend to RAM，简称STR，只是standby耗电更多一些，返回到正常工作方式时间更短一些而已。
    
    只需要

    # echo standby > /sys/power/state

###2. 休眠 (hibernation)

    休眠也有两种方式：shutdown和platform。shutdown是通常的方式，比较可靠一些。如果你的系统上ACPI支持非常好，那就有机会支持platform方式。激活的方式稍有不同：
    
    # echo platform > /sys/power/disk; echo disk > /sys/power/state
    就可以了。
    or
    # echo shutdown > /sys/power/disk; echo disk > /sys/power/state
    就可以了。
    注意休眠有一个前提，就是在系统启动时需要指定resume设备，也就是休眠的镜像需要保存的分区。一般都用swap分区来做。
    指定方式是:
    kernel /boot/vmlinuz root=/dev/sda1 resume=/dev/sda2 vga=0×314 …
    这样在系统启动时，内核会检查resume中的内容，如果存在上次休眠的镜像，那内核便会将镜像读入内存，恢复正常工作状态。
