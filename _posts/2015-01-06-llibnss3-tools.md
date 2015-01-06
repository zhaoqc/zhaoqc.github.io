---
layout: post
title: [ please install *libnss3-tools* package ]
description: "多此一举"
date: 2015-01-06 08:00 PM 
category: Linux
avatarimg: "/img/ecjt.png"
tags: [ nss,libnss3 ]
duoshuo: true
---

    Debian/Ubuntu: sudo apt-get install libnss3-tools
    Fedora: su -c "yum install nss-tools"
    Gentoo: su -c "echo 'dev-libs/nss utils' >> /etc/portage/package.use && emerge dev-libs/nss" (You need to launch all commands below with the nss prefix, e.g., nsscertutil.)
    Opensuse: sudo zypper install mozilla-nss-tools

