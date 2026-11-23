# 🧭 科学上网入门手册

机场订阅、机场节点、代理和 VPN 分别是什么？这本手册从网站为什么打不开讲起，帮助新手看懂网络工具，再了解配置、排查与隐私边界。

📚 内容涵盖代理、VPN 与 Tor 的区别，客户端、核心和协议的分工，Clash 与 Mihomo、V2Ray 与 Xray 的关系，以及订阅、节点、规则和 DNS。遇到连接问题，可以从应用设置、权限和日志入手排查；选择工具时，也要检查软件来源、服务商说明和凭据安全。

📘 [代理、VPN、Tor 有什么区别](https://ladderer.com/articles/proxy-vpn-tor/)：比较覆盖范围、信任关系和速度限制，弄清浏览器代理与 VPN 隧道各自能接管哪些流量。

> 🔎 先弄清工具负责什么。连接成功，不等于匿名或安全。

文章保留官方参考资料，涉及隐私、法律与使用责任时提供一般性说明。可按网站目录顺序阅读，也可以直接查找眼前的问题。

📖 **[进入手册](https://ladderer.com/)** · [关于与使用边界](https://ladderer.com/about/)

📗 [代理工具生态总览](https://ladderer.com/articles/proxy-ecosystem/)：客户端、核心和协议各管什么，Clash、V2Ray、Xray 这些名字该放在哪一层？

🔗 [订阅服务评测清单](https://github.com/fiamitaa/jichangtuijian)

📙 [代理协议详解](https://ladderer.com/articles/protocols/)：从 HTTP、SOCKS5 到 Hysteria 2、AnyTLS，了解代理协议的用途、连接条件，以及它们与 VPN 隧道的区别。

📕 [Clash 家族到底有哪些区别](https://ladderer.com/articles/clash-family/)：区分 Clash、Mihomo 核心与桌面客户端，并核对机场订阅的配置兼容性。

📖 [V2Ray、Xray 与客户端的关系](https://ladderer.com/articles/v2ray-xray/)：核心与管理界面如何配合，怎样核对平台和配置支持。

📖 [配置、订阅、节点与规则](https://ladderer.com/articles/config-subscriptions/)：导入订阅、选择节点和设置分流，分别改变了什么？

📖 [连接后打不开网页怎么办](https://ladderer.com/articles/troubleshooting/)：从问题范围、应用代理和日志开始，逐步检查 DNS 与连接。

📖 [如何判断工具是否安全可靠](https://ladderer.com/articles/tool-security/)：软件来源、权限、日志政策和套餐条款，哪些值得核对？

📖 [隐私、法律与使用边界](https://ladderer.com/articles/privacy-boundaries/)：换了出口 IP，哪些身份信息和使用责任仍然存在？

## 入门延伸

现有十篇基础文章之外，新增四篇具体问题的阅读指南：

- [机场订阅、商业 VPN 和自建怎么选](https://ladderer.com/articles/choosing-proxy-service/)：从设备、应用、维护时间和信任对象，判断哪种服务适合自己。
- [机场测速怎么看](https://ladderer.com/articles/speed-test/)：延迟、吞吐、抖动和丢包测的是什么，怎样结合实际应用比较节点？
- [流量、有效期、续费和退款](https://ladderer.com/articles/subscription-billing/)：付款前核对计费口径、设备限制和购买渠道，读懂退款细则。
- [订阅链接泄露了怎么办](https://ladderer.com/articles/subscription-leak/)：删掉消息之后，怎样重置链接、撤销旧凭据并安全求助？

- [订阅能更新，为什么节点还是不能用](https://ladderer.com/articles/subscription-updates-node-fails/)：从订阅下载、节点连接到实际访问，找出故障出现在哪一步。

- [怎么确认某个应用真的走了代理](https://ladderer.com/articles/verify-app-proxy/)：用应用设置、连接日志和出口对照验证实际路径。

- [节点、入口和出口 IP 有什么区别](https://ladderer.com/articles/node-entry-exit-ip/)：沿着一次请求分清节点配置、客户端连接地址和网站观察到的出口。

- [怎样向服务商反馈连接故障](https://ladderer.com/articles/report-connection-problem/)：把时间、版本、故障范围和脱敏日志整理成一份可复制的反馈。

📖 [翻墙犯法吗？](https://ladderer.com/articles/internet-access-risks/)：守住行为边界，了解工具限制，有风险意识，也不必过度恐惧。


## 技术操作：curl 代理验证

- [验证 HTTP 代理](https://ladderer.com/articles/curl-http-proxy-test/)：分别用 Windows、macOS 和 Ubuntu 检查 HTTP 代理端口。
- [验证 SOCKS5 代理](https://ladderer.com/articles/curl-socks5-proxy-test/)：分平台检查 SOCKS5 连接与域名解析路径。
