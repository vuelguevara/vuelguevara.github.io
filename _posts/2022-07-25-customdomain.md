---
layout: post
title: Custom Domain Name in Localhost Ubuntu 22.04
date: 2022-07-25 12:00:00 +800 
categories: [ubuntu]
tags: [ubuntu,webdev,apache2,php]  #should be lower case
---

### This documentation lets you run your php projects via apache2 using your own own custom local domain name instead of running it via localhost.

## Creating a Directory For Your Project

 Change directory to your www folder
```bash
cd /var/www
```

Make directory folder for your project inside the www directory

```bash
sudo mkdir yourprojectname
```

## Creating Vhost file for your project

Go to the sites-available directory inside apache 2

```bash
cd /etc/apache2/sites-available
```

Create your config file inside the sites-available directory

```bash
sudo touch yourprojectname.conf
```
Edit the config file
```bash
sudo gedit yourprojectname.conf
```
Paste the following (use your desired domain name) then save and close:

```bash
<VirtualHost *:80>
	ServerName yourprojectname.dev
	ServerAdmin webmaster@yourprojectname.dev
	DocumentRoot /var/www/yourprojectname

	ErrorLog ${APACHE_LOG_DIR}/yourprojectname-error.log
	CustomLog ${APACHE_LOG_DIR}/yourprojectname-access.log combined
</VirtualHost>
```

Link Apache2 Available Sites directory to Enabled Sites

```bash
sudo ln -s /etc/apache2/sites-available/yourprojectname.conf /etc/apache2/sites-enabled/yourprojectname.conf 
```

Reload Apache 2

```bash
sudo service apache2 reload
```
## Edit linux hosts file then include your custom domain 
```bash
sudo gedit /etc/hosts
```

```bash
127.0.0.1	localhost
127.0.1.1	vuelguevara-ROG-Zephyrus-G14
127.0.1.1	yourprojectname.dev

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```



