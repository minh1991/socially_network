module.exports = {
  // VIẾT HOA CHỮ CÁI ĐẦU
  firstUpper: username => {
    const name = username.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
  },

  // CHUYỂN TẤT CẢ THÀNH CHỮ THƯỜNG
  toLowerCase: string => {
    return string.toLowerCase();
  }
};
