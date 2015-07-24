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
			注：这样会出现一个.git的文件夹，但是是隐藏的。内部有许多的文件，包括：HEAD,branches,config,description,hooks,info,objects,refs.其中，branches,hooks,info,objects,refs都是文件夹，其他的是文本文件。

			git status
				-未跟踪   < - > 跟踪
				-工作目录 < - > 暂存区
				-暂存区   < - > 最新提交
				-文件有两种状态，一个是内容状态，一个是文件状态。
			注：touch  READ.md.此命令是在仓库内创建一个空的文件，文件的具体信息在后面，文件名是READ，文件类型是md.

			git add				添加文件内容到暂存区（同时文件被跟踪<文件级别的变化>）
				- git add .   
					添加当前目录的所有文件

			忽略文件
				- .gitignore
					在添加时忽略匹配的文件
					仅作用于未跟踪的文件

			git-rm				从暂存区删除（同时文件从已跟踪状态变为未跟踪）
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
				 	暂存区与某次提交差异，默认为HEAD，HEAD为当前的提交
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

			将内容从上次提交复制到工作目录
				- git checkout HEAD -- <file>

		-分支操作
			git branch			分支的增删查改都需要
				- git branch <branchName>
					创建一个分支
				- git branch -d <branchName>
					删除一个分支
				- git branch -v
					查看所有的分支版本信息
				- git brance next
					在HEAD指向的commit处添加一个另外的引用（原本的是master)
					所有的引用信息都在.git/refs/heads文件夹内，每一个分支都会是一个文件。
					如果此时添加了一个新的引用，那么HEAD指向的引用（master）会一起指向新的版本，但是新添加的引用（next）则不会改变，还是原本的位置。
					HEAD通过切换不同的引用，就可以实现不同分支的切换。
		
			git checkout 		通过移动HEAD检出版本，可用于分支切换（同时暂存区和工作目录都会移动到相对应的版本）
				- git checkout <branchName>
					让指针直接指向目标分支，例：git checkout next。
				- git checkout -b <branchName>
					直接创建一个新的分支，并切换到当前分支。相当于：git branch <branchName> + git checkout <branchName>
					此时创建的新分支，是在HEAD所在分支指向的版本上。
				- git checkout -
					回到上一个的分支，例：git checkout -。就会回到master分支。
				- git checkout xxxxxxx(版本号)
					不指定分支名，指定一个版本号，能够将版本移动到相应的版本上去，与具体的分支分离，无法实现版本回退。（detached head，此状态下无法提交版本，但是可以查看相关的版本内容，此时的暂存区和工作目录上的内容)

			git branch -v
				查看分支情况，会列出当前的所有分支信息，包括：分支名，分支的hash值，和一个resolve参数（不太清楚）。其中用*号标注的分支，即HEAD所关联的分支。

			git reset 			将当前分支回退到历史某个版本（最新的提交会成为无索引版本，可能会被回收）
				- git reset --mixed <commit> (默认)
					可以不添加“--mixed”参数，因为是默认的。此状态下会将当前的版本内容复制到暂存区。
				- git reset --soft  <commit> 
					仅仅是指针和分支回到了历史版本
				- git reset --hard  <commit>
					当前版本内容被复制到暂存区和工作目录。

			git reflog 
				会列出指针经过的commit路径，通过hash进行定位，但是由于只能储存一定的内容，并且不断更新。所以如果太晚，就可能无法找到了。
				此方式不够直观，可以通过另外的捷径方式：
					- A^:A上的父提交
					- A~n:在A之前的第n此提交
					例：如果最新的提交的hash值为1f2f476,前一个提交为e39d0b3，那么从最新的提交到前一个提交的方式可以如下：HEAD^,HEAD~1,master^(此时假设HEAD指向master分支）,1f2f476~1。

			git stash		保存目前的工作目录和暂存区状态，并返回到干净的工作空间
				- git stash save "xxxxxx（注解）"
					将当前工作目录和暂存区内容推送到stash区，以便之后工作需要
				- git stash list
					例：stash@{0}: On master: xxxxxxxx
					解读：首先是一个stash区中的列表排序，此时只有一个。然后指明所在的分支，最后是一些注解，方便识别。
				- git stash apply stash@{x}
					将对应的stash恢复到工作目录上。
				- git stash drop stash@{x} 
					将对应的stash记录删除。
				- git stash pop
					等价于：stash apply + stash drop
					但是只能够等价于stash栈中最顶端的stash，这与数组的操作类似。
			git merge 				合并分支
				例：git merge next master (后面的两个参数分别为两个分支名)
				三方合并（两个分支的父节点，以及两个分支）。将合并的内容复制到工作目录和暂存区，然后完成一次提交。最新的提交会有两个父指向，分别是两个分支的最新提交。HEAD和所指向的分支移动到最新的提交。
			注：merge指令很大程度会发生冲突，
				
				- git merge fast-forward
					不在master分支上做操作，只在next分支上提交，此时的merge就会只是一条线性的分支链。
				- git merge next --no-ff
					即不要使用fast-forward方式合并，此情况下同最开始的方式类似，只是同样在master分支下没有进行版本提交。

			git cat-file -p HEAD
				显示某次提交的具体信息。
			git rebase				修剪提交历史基线，俗称“变基”
				HEAD指向要重演的分支节点，先找到三方（两个节点指向的版本和它们的共同父版本），然后将分支节点上的版本在master节点上进行重演。最后HEAD和分支节点指向最新的提交。使提交变得线性。
				- git rebase --onto master xxxxxx
					将分支上的指定版本在master分支上重演。当然，HEAD和指向的分支同样会移动到最新的版本。
			注：勿在共有分支上使用rebase.(例：master)
			git tag
				- git tag 

		远程操作
			Git支持本地协议

		git remote
			远程仓库相关配置操作


