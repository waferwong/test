function FindProxyForURL(url, host){
  if (shExpMatch(host, "qq.com")) {
    return "DIRECT"; 
  }
  return '192.168.16.18'
}
