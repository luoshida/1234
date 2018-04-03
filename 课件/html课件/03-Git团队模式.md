# 什么是Git
Git是目前世界上最先进的分布式版本控制系统,Git的作者就是Liunx的作者-Linus
# Git安装
## Windows用户 
windows用户[下载](https://git-for-windows.github.io)后安装,安装后通过Git bash打开终端
## Mac用户
```
$ brew install git
```
## Linux用户
```
sudo apt-get install git
```
# 学点常用的命令
## 查询目录内容命令 ls(list)
```
ls //查看当前目录下的所有目录
```
## 改变目录 cd(change directory)
```
cd test //切换到test目录下
```
> 注意:
> 
> 1. .代表当前目录
> 
> 2. ..代表上一层目录
> 
> 3. /代表根目录或者目录分割符
> 
> 4. ~代表用户的家目录,直接输入cd可以进入这个目录
> 
## 新建目录 mkdir(make directories)
```
mkdir test //在当前所在的目录下面新建一个目录(test)
```
## 查询当前目录 pwd(print working directory)
```
pwd
```
# 自报家门
```
git config --global  user.name tom //你是谁
git config --global  user.email 76876201@qq.com //怎么联系到你
git config user.name //查看我是谁
git config user.email //查看我的联系方式
```
# 创建版本库
```
mkdir test
cd test
git init
```
<img src="img/03-1.png" alt="">
> 注意:
> 
> 1.新建的目录必须是英文 
> 
> 2.git为隐藏目录,不能随便更改

# 查看状态
```
git status
```
> * 如果查看时中文显示乱码,可以添加如下配置
```
git config --global core.quotepath false
```

# 添加文件到版本库中
* 第一步，用命令**git add**告诉Git，把文件添加到仓库
```
git add test.txt
```
* 第二步，用命令**git commit**告诉Git，把文件提交到仓库
```
git commit -m 'add text file'
```

> 注意:
> 
> 1.Git只能跟踪文本文件的改动，比如TXT文件，网页，所有的程序代码等等
> 
> 2.不要使用Windows自带的记事本编辑任何文本文件
> 
> 3.文件一定要放在.git所在目录或者所在目录的子目录中
> 
> 4.可以使用**git add . **把所有的改动添加到仓库
> 
> 5.**git add**可以多次执行

# 工作区,版本库,暂存区
## 工作区（Working Directory）
电脑里能看到的目录
## 版本库（Repository）
隐藏目录.git
## 暂存区（Stage）
在版本库中的一片存储区域
> 注意:
> 
> 1.git add命令实际上就是把要提交的修改放到暂存区（Stage）
> 
> 2.git commit命令实际上就是一次性把暂存区的所有修改提交到仓库
> 
> 3.git commit只负责提交暂存区的修改,在工作区修改了但是没有添加到暂存区的修改不会被提交

# 删除文件
## 方法一(推荐),通过**git rm**删除,然后git commit
* 第一步,通过**git rm**删除
```
git rm text.txt
```
* 第二步,通过git commit把修改提交到仓库
```
git commit -m 'delete file'
```

## 方法二,在工作区删除,然后git add 和 git commit
* 第一步,在工作区把文件删除
* 第二步,通过git add把修改提交到暂存区
```
git add text.txt
```
* 第三步,通过git commit把修改提交到仓库
```
git commit -m 'delete file'
```
> 注意:git rm的方式删除其实就是把工作区的文件删除掉然后提交到暂存区

# 重命名文件
* 第一步,通过**git mv**重命名
```
git mv test.txt test2.txt //把test.txt重命名为test2.txt
```
* 第二步,通过**git commit**把修改提交到仓库
```
git commit -m 'rename file'
``` 

> 注意:在工作区手动更改文件名会被git认为是删除了一个文件然后再新建一个文件 

# 撤销修改
## **git checkout -- file** 丢弃工作区的修改
```
git checkout -- test.txt //丢弃工作区对text.txt的修改
```
> 注意: 
> 
> 1. git checkout -- file 是让这个文件回到最近一次git commit或git add时的状态
> 
> 2. git checkout -- file 命令中的--不能省略,省略就变成了“切换到另一个分支”

##  **git reset HEAD file** 丢弃暂存区的修改
```
git reset HEAD test.txt
```
> 注意:
> 
> 1. git reset HEAD file只是把暂存区的修改撤销掉,工作区的修改还在,可以继续通过git checkout -- file来撤销工作区的修改
> 
> 2. HEAD表示当前版本

## **git reset --hard HEAD或者commit_id** 版本回退
```
git reset --hard HEAD //回退到当前版本,即工作区的内容和最后一次commit的内容一致
git reset --hard 34cd34343 //回退到commit id为34cd34343的版本
```
> 注意:
> 
> 1.Git的版本回退速度非常快，因为Git在内部有个指向当前版本的HEAD指针，当你回退版本的时候，Git仅仅是改变HEAD指针的指向
> 
> 2.用HEAD表示当前版本,上一个版本就是HEAD^，上上一个版本就是HEAD^^
> 
> 3.回退前,用**git log**可以查看提交历史，以便确定要回退到哪个版本
> 
> 4.如果找不到回退前的commit id,可以用**git reflog**查看命令历史，以便确定哪个版本
> 
> 5.--hard中间不能有空格

# 远程仓库GitHub
## 什么是GitHub
GitHub是一个基于git的免费的远程仓库

## 申请GitHub帐号
## 创建一个新的空仓库

# 同步远程仓库
## 本地有仓库,同步到GitHub上
* 第一步,在Github上创建一个空仓库
* 第二步,在本地仓库所在目录添加一个远程仓库
```
git remote add origin https://github.com/kuazhu/test.git
```

> 注意:
> 
> 1.origin远程库的名字，这是Git默认的叫法，也可以改成别的，但是origin这个名字一看就知道是远程库
> 
> 2.https://github.com/kuazhu/test.git 是远程库的地址,github地址分为https协议和ssh协议两种,如果没有添加ssh的公钥到github上可以使用https协议的地址
> 
> 3.如果第一次使用,https的地址在推送内容到远程库上时需要输入github的用户名和密码
> 
> 4.可以通过 git remote remove origin来删除远程库
> 
> 5.可以通过 git remote -v 来查看远程库

* 第三步,本地库的内容推送到远程库
```
git push -u origin master
```

> 注意:
> 
> 1.用git push命令，实际上是把当前master分支推送到远程
> 
> 2.由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来,下次推送时用**git push**就可以了
> 
> 3.origin就代表了远程仓库的地址,这里也可以直接用远程仓库的地址,如:
> 
> ```
> git push -u https://github.com/kuazhu/test.git master
> ```
> 

## GitHub上有仓库,同步到本地
* 第一步,在github上创建一个空仓库
* 第二步,把github上的仓库克隆到本地
```
git clone https://github.com/kuazhu/test2.git
```

> 注意:
> 
> 1.和在本地添加远程仓库一样,github地址分为https协议和ssh协议两种,如果没有添加ssh的公钥到github上可以使用https协议的地址
> 
> 2.如果第一次使用,https的地址在推送内容到远程库上时需要输入github的用户名和密码
> 
> 3.git clone的仓库在本地可以直接用**git push**推送修改到远程仓库
> 
> 4.推荐使用这种方式来新建并管理自己的项目

# 使用ssh协议的仓库地址
* 第一步,生成ssh key(如果没有的话)
```
ssh-keygen -t rsa -C '76876291@qq.com' //邮件写配置git时的邮件地址
```
> 注意:
> 
> 1.会生成一个私钥文件(id_rsa)和公钥文件(id_rsa.pub)
> 
> 2.保管好私钥文件不被泄漏

* 第二步,把公钥文件的内容原封不动的拷贝到github上
* 第三步,使用ssh协议的远程地址

> 注意:
> 
> 1.可以在添加远程库或者从github上克隆时使用
> 
> 2.使用ssh除了不需要输入密码外,由于ssh支持原生的git协议,所以速度最快
> 
> 3.ssh是一种网络协议，主要用于计算机之间的加密登录
> 
> 4.可以用**ssh -T git@github.com**测试

# 集中式vs分布式简介

# 团队协作开发

## 基本配置
* 管理员在远程库创建一个项目仓库
* 在项目仓库中添加开发人员的ssh公钥,以github为例,项目仓库的主页中的设置->Deploy keys->Add deploy key
* 开发人员使用git clone把项目克隆到本地,注意此时的克隆地址需要用ssh协议,否则没有权限提交

## 分支管理

### 分支的基本概念

* 分支就是一条提交的时间线,HEAD指针指向当前提交,准确的来说应该是HEAD指针指向当前的分支指针,而当前的分支指针才正真指向当前的提交
* master分支是主分支,在git初始化仓库的时候会自动创建,一开始master指向最新的提交,HEAD指向master
* 每次提交，master分支会向前移动一步,HEAD指针也随之移动

### 分支操作

#### 创建分支
 
```
git branch dev
```
> 该命令相当于创建了一个名字叫dev的指针,该指针指向当前的提交

#### 切换分支
```
git checkout dev
```
> 该命令相当于把HEAD指针指向叫dev的分支指针

#### 创建并切换分支
```
git checkout -b dev
```
> 该命令相当于git branch dev和git checkout dev的简写

#### 查看当前分支
```
git branch
```
> 该命令列出所有分支,*号表示当前分支,注意此时的提交是在当前分支上进行的,并不会影响其它分支


#### 合并分支
```
git merge dev
```
> * 该命令把指定分支合并到当前分支,执行该操作前经常会切换到master分支,意思是把当前的分支的提交合并到master分支上
>
> * 通常在合并时git会用Fast-forward(快进模式)合并,也就是直接把master指向dev的当前提交,但是并不是每次合并都能Fast-forward

#### 删除分支
```
git branch -d dev
```
> 该命令相当于把名字叫dev的指针删除掉

#### 解决冲突
> * 在合并分支时,如果指定分支和当前分支都有新的提交,并且同时修改了同一个文件,这时合并就可能会有冲突,Git会标记出不同分支的内容,我们必须人为的分析后手动解决冲突,然后再提交
> * 实际项目中,master分支仅用来发布新版本,是最稳定的,平时不在上面开发测试,该分支需要时刻与远程同步
> * 在仓库中建一个dev分支,dev分支用来开发和测试,到合适的时候再把dev分支合并到master分支上,该分支需要与远程同步

#### 查看分支合并图
```
git log --graph
```

### 团队协作中的分支

#### 抓取分支

```
git checkout -b dev origin/dev
```
> * 从远程库clone时,默认情况下,只能看到本地的master分支,如果要在dev分支上开发,就必须创建远程origin的dev分支到本地
> * 抓取分支前在远程库里必须有该分支

#### 推送主分支 
```
git push origin master
```

> 当你从远程仓库克隆时,实际上Git自动把本地的master分支和远程的master分支对应起来了,并且,远程仓库的默认名称是origin。以后使用git push就相当于使用git push origin master

#### 推送其它分支

```
git push origin dev
```
> 该命令会本地的dev分支推送到远程库,注意如果只写git push,会推送所有关联的分支

#### 解决冲突
* 在推送时,如果其他人已经向分支上推送了提交,而你也对同样的文件作了修改,此时就会发生冲突
* 解决冲突的办法是先用git pull把最新的提交从远程分支上抓下来,然后,在本地合并,解决冲突,解决冲突的办法和合并分支一样,再推送
* 如果git pull提示“no tracking information”,则说明本地分支和远程分支的链接关系没有创建,用以下命令建立链接后再用git pull
```
git branch --set-upstream-to=origin/dev dev
```
或者

```
git branch --set-upstream dev origin/dev
```
