## 1.为什么用sublime?
1. 简单好用
2. 多点编辑
3. 强大的包管理
4. 深度可定制
5. 快速切换文件 Cmd+p
6. 好用的命令执行面板 Shift+Cmd+p
7. 社区活跃 

## 2.安装
- 参考 <https://www.sublimetext.com/>
- Windows用户注意操作系统类型(64位还是32位)
 
## 3.常用操作
1. sublime的打开
    - 直接双击图标
    - 通过Spotlight呼出
    - 通过命令行调出

2. 查看快捷键
    - 菜单栏查看
    - 在命令面板(Shift+Cmd+p)中模糊输入命令查看
    - 在配置文件中查看 

3. 文件相关操作
    - Cmd+o 打开文件
    - Cmd+n 新建文件
    - Cmd+s 保存文件
    - Cmd+p 模糊输入文件名打开文件,支持以下几种形式
        - 文件名:行号
        - 文件名@标志(函数名之类的)
        - 文件名#搜索关键字
        - 目录名 文件名
    - Ctrl+- 跳转到打开文件前所在的文件
    - Shift+Ctrl+- 文件跳转过了回跳
    - Ctrl+Tab 打开的多个文件之间跳转

4. 文件搜索
    - Cmd+f 搜索当前文件 Enter查找下一个 Shift+Enter查找上一个
    - Alt+Cmd+f 搜索替换
    - Shift+Cmd+f 文件夹中查找替换
    - 鼠标悬停会在 类/函数/方法的上会出现其定义的链接

5. 多点选择编辑
    - 多点选择,按住 Cmd 键,点击鼠标左键
    - 列选择，按住 Alt 键，用鼠标左键拖动
    - Cmd+d 选中当前单词，继续敲可以选中多个

6. 移动选择
    - 方向键,一次移动一个字符
    - Alt+方向键,一次移动一个单词
    - Cmd+方向键,一次移动一行
    - Shift+移动,移动的同时进行选择

7. 编辑
    - Cmd+/ 注释掉/取消注释
    - Ctrl+ ]/[ 缩进
    - Ctrl+l 选择当前行
    - Shift+Cmd+d 复制当前行
    - Ctrl+z 撤销
    
## 4.用户数据目录
1. 用户的数据都放在一个固定的目录,操作系统不同,目录的路径也不同,一般情况下参考以下目录
    - OS X: ~/Library/Application Support/Sublime Text 3
    - Windows: %APPDATA%\Roaming\Sublime Text 3
2. 以我自己的Mac为例,所有的用户数据都存放在/Users/air/Library/Application Support/Sublime Text 3/目录中,以下简称用户数据目录
3. 用户自定义的相关文件存放在 用户数据目录/Packages/User/ 目录下,以下简称用户自定义目录
4. 自定义的内容一般分为Default和User
    - Default是编辑器自带的的默认配置,一般情况下不允许更改
    - User是用户自定义的文件,优先级高于Default,用户可以根据爱好配置
5. 如果想把自己的sublime恢复到初始状态,可以删除整个用户数据目录,建议删除前备份该目录
    
## 5.自定义快捷键
1. 查找精确的命令名
    - Ctrl + \`(反引号)打开控制台
    - 在控制台中输入 sublime.log_commands(True)
    - 再次执行操作,在控制台中就可以看到精确的命令名  
2. 打开Key Bindings中的User配置(对应 用户自定义目录 下的Default (OSX).sublime-keymap 文件)
3. 复制一条配置,更改键和对应的命令名,如果是首次打开,可以从Default配置中拷贝一条配置然后修改

> 默认浏览器打开设置
```
方式一：

{ "keys": ["ctrl+b"], "command": "open_in_browser" },

方式二：
  { "keys": ["command+b"], "command": "side_bar_files_open_with",
    "args": {
      "paths": [],
      "application": "/Applications/Google Chrome.app",
      "extensions":".*"
    }
  },
```

## 6.自定义配置
1. 打开Settings中的User配置(对应 用户自定义目录 下的Preferences.sublime-settings 文件)
2. 添加或者修改相关的配置,比如,Sublime默认是不显示行号的,如果想显示行号,可以添加
"highlight_line": true,

## 7.包管理
1. 在Mac系统中,Sublime自带默认的包安装在 /Applications/Sublime Text.app/Contents/MacOS/Packages 中
2. 可以通过安装PackageControl来安装和管理包,安装方法参考 <https://packagecontrol.io/>
3. 安装完成后,可以在命令面板(Shift+Cmd+p)中输入Install Package来打开包安装面板
4. 在包安装面板中直接输入需要安装的包名就可以安装对应的包了
5. 安装完成后
    - 会在 用户自定义目录 下生成一个PackageControl.sublime-settings文件,这个文件纪录了所有用户自己安装的包信息
    - 会在 用户数据目录/Installed Packages/ 目录下生成这个包的文件
    - 有的包还会在 用户数据目录/Packages/ 下或者 用户自定义目录 下生成相关的文件
6. 如果想删除某个包,在命令面板中输入Remove Package打开卸载面板直接输入需要删除的包名就可以了

## 8.常用包介绍
1. emmet html/css代码补全
    - 参考 <https://docs.emmet.io/cheat-sheet/>
2. SyncedSideBar 在侧边栏中同步展开当前打开的文件
3. Markdown Preview

> 快捷键设置:{ "keys": ["alt+m"], "command": "markdown_preview", "args": {"target": "browser", "parser":"markdown"} },

## 9.自定义代码段 Snippets
1. Tools->Developer->New Snippet 新建一个Snippet
2. 修改snippet 内容(content)/触发词(tabTrigger)/作用范围(scope) 
3. 打开相关的文件,用快捷键 Alt+Cmd+p 可以查看该文件所在的作用范围
4. 保存文件到 用户自定义目录 下, 以 .sublime-snippet结尾 

## 10.管理自己的配置
1. 将 用户自定义目录 下的配置文件文件推送到github上
2. 如果新安装Sublime,可以从github上把文件clone下来放到 用户自定义目录 下
3. 安装PackageControl,这样所有的包会自动安装上,所有的配置也会生效
    
