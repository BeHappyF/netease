一.版本控制系统（VCS）
是一种记录若干文件的修订记录的系统，它帮助我们查阅或回到某个历史版本
	①分类：
		-“人肉”VCS
			也就是没有版本控制系统，完全手动控制。
		-LVCS本地
			利用一个本地的版本数据库来存储版本。（对于多人开发的项目无解）
			例：Revision Control System。

		-CVCS集中式
			例：CVS(Concurrent Version System).SVN(Subversion),Perforce.
		-DVCS分布式
			每一份历史仓库都是一次完整的数据拷贝。
			例：
二.分支模型
	①分支
		从目标仓库获得一份项目拷贝，每条拷贝都有和原仓库功能一样的开发线
	②分支模型（branching model)/工作流（workflow）
		一个围绕项目[开发/部署/测试]等工作流程的分支操作（创建，合并等）规范集合
	③产品级的分支模型
		-常驻分支
			development
				-从master创建
			production(master)
				-默认分支
		-活动分支
			feature
				-从development创建
			hotfix
				-从master创建
			release
				-从development分支创建	
	④环境
		开发环境
			-测试/开发配置
			-需要提交到下一个release的特性分支，在本地测试
		测试环境	
			-测试
			-release/development分支
		预发布环境
			-线上
			-release分支
		生产环境	
			-线上
			-master分支
三.Git
	Git介绍
		-是一个免费开源的分布式版本控制系统（DVCS）
		-是一个基于内容寻址的存储系统
		-优势：快（不依赖于网络请求）；
			  完全的分布式；
			  轻量级的分支操作；
			  Git已经成为现实意义上的标准；
			  社区成熟活跃（github，但是两者并不相等）；
	Git命令详解
		-超过100个子命令！
		-基本操作：
			git config			配置git
				用户配置
					-git config --global user.name "Humiliter Fang"
						配置用户名
					-git config --global user.email test@example.com
						配置邮箱地址
				配置级别
					-  --local[默认，高优先级]：只影响本仓库  文件放在本仓库的.git/config,是一个文本文件，可以直接查看。
					-  --global[中优先级]：影响到所有当前用户的git仓库  文件放在用户目录的~/.gitconfig
					-  --system[低优先级]：影响到全系统的git仓库   放在全局文件中/etc/gitcofig

			git init  			初始化仓库
				git init [path]
				git init [path] -- bare

			git status
				-未跟踪   < - > 跟踪
				-工作目录 < - > 暂存区
				-暂存区   < - > 最新提交
				-文件有两种状态，一个是内容状态，一个是文件状态。

			git add				添加文件内容到暂存区（同时文件被跟踪）
				- git add .   
					添加当前目录的所有文件

			忽略文件
				- .gitignore
					在添加时忽略匹配的文件
					仅作用于未跟踪的文件

			git-rm				从暂存区删除
				- git rm --cached
					仅从暂存区删除
				- git rm 
					从暂存区与工作目录删除
				- git rm $(git ls-files --deleted)
					删除所有被跟踪，但是在工作目录被删除的文件

			git-commit
				- git-commit -m "xxxxx"
					使用“-m”参数对文件进行一个注释
				- git-commit -a -m 'xxxx'
					直接提交

			git log				显示提交历史信息
				- commit xxxxxxxxxx.....
					每一个commit都是一个历史记录,是通过SHA-1编码的hash标示符
				- Author
					git-config配置的提交者信息
				- Date:  Thu Mar 5 14:39:44 2015 +0800
					提交时间

				其他的形式：
					$ git log --online
					 	2343dde full commit
					 	1321fds first commit
					注：6.7位的hash值就能够实现标示唯一的版本号

					$ git log --color --graph--
					pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit

			git中的alias命令
				- git config alias.shortname <fullcommand>
					$ git config --global alias.lg "log --color --graph--
					pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
					$ git lg

			git diff			显示不同版本的差异
				- git diff
					工作目录和暂存区的差异
				- git diff -cached [<reference>]
				 	暂存区与末次提交差异，默认为HEAD，HEAD为当前的提交
				- git diff <reference>
					工作目录与某次提交的差异
				- git diff xxxx  xxxx
					后面的为两个版本的hash值

			撤销本地修改
				- git checkout -- <file>
					将文件内容从暂存区复制到工作目录

			撤销暂存区内容
				- git reset HEAD <file>
					将文件内容从上次提交复制到暂存区