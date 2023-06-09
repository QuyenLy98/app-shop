import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'philip',
      email: 'philip@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Quyen',
      email: 'vanquyen0508@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Viet',
      email: 'viet@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Son',
      email: 'son@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Vi vo v2',
      slug: 'vi-vo-v2',
      category: 'Điện thoại',
      image: '/hinhanh/dienthoai/vivo-v2.jpg',
      price: 120,
      countInStock: 5,
      brand: 'vivo',
      rating: 4.5,
      numReviews: 10,
      description: 'Điện thoại vi vo máy mới 100% bảo hành 1 năm',
    },
    {
      //_id: '2',
      name: 'Oppo4g',
      slug: 'oppo4g',
      category: 'Điện thoại',
      image: '/hinhanh/dienthoai/oppo4g.jpg',
      price: 100,
      countInStock: 12,
      brand: 'oppo',
      rating: 4.6,
      numReviews: 6,
      description: 'Máy máy 100%',
    },
    {
      //_id: '3',
      name: 'Xiaomi 11 Pro',
      slug: 'xiaomi-11-pro',
      category: 'Điện thoại',
      image: '/hinhanh/dienthoai/xiaomi11-pro.jpg',
      price: 200,
      countInStock: 11,
      brand: 'xiaomi',
      rating: 4.8,
      numReviews: 20,
      description: 'Điện thoại cấu hình mạnh được ưa chuộng, hình ảnh sắt nét',
    },
    {
      //_id: '4',
      name: 'Xiaomi 12 C',
      slug: 'xiaomi-12-c',
      category: 'Điện thoại',
      image: '/hinhanh/dienthoai/xiaomi12c.jpg',
      price: 400,
      countInStock: 34,
      brand: 'xiaomi',
      rating: 4.9,
      numReviews: 45,
      description: 'Điện thoại công nghệ cao',
    },
    {
      //_id: '5',
      name: 'Dell',
      slug: 'dell',
      category: 'Máy tính',
      image: '/hinhanh/maytinh/dell.jpg',
      price: 400,
      countInStock: 15,
      brand: 'dell',
      rating: 4.6,
      numReviews: 32,
      description: 'Máy tính bền, pin trâu',
    },
    {
      //_id: '6',
      name: 'HP',
      slug: 'hp',
      category: 'Máy tính',
      image: '/hinhanh/maytinh/hp.jpg',
      price: 350,
      countInStock: 15,
      brand: 'hp',
      rating: 4.7,
      numReviews: 12,
      description: 'Máy tính nhẹ gọn',
    },
    {
      //_id: '7',
      name: 'Mac Book',
      slug: 'mac-book',
      category: 'Máy tính',
      image: '/hinhanh/maytinh/Macbook.jpg',
      price: 1100,
      countInStock: 34,
      brand: 'macbook',
      rating: 4.8,
      numReviews: 36,
      description: 'Máy tính cấu hình mạnh, giao diện đẹp',
    },
    {
      //_id: '8',
      name: 'Máy tính bàn HP',
      slug: 'may-tinh-ban-hp',
      category: 'Máy tính',
      image: '/hinhanh/maytinh/maytinhban_hp.jpg',
      price: 300,
      countInStock: 34,
      brand: 'hp',
      rating: 4.4,
      numReviews: 14,
      description: 'Máy tính mới',
    },
    {
      //_id: '9',
      name: 'Loa Bluetooth',
      slug: 'loa-bluetooth',
      category: 'Thiết bị',
      image: '/hinhanh/thietbi/loa-bluetooth.jpg',
      price: 20,
      countInStock: 120,
      brand: 'vk',
      rating: 4.6,
      numReviews: 20,
      description: 'Loa kết nối Bluetooth',
    },
    {
      //_id: '10',
      name: 'Tai Nghe Bluetooth',
      slug: 'tai-nghe-bluetooth',
      category: 'Thiết bị',
      image: '/hinhanh/thietbi/tainghebluetooth.jpg',
      price: 15,
      countInStock: 200,
      brand: 'vkb',
      rating: 4.6,
      numReviews: 24,
      description: 'Tai nghe kết nối Bluetooth',
    },
    {
      //_id: '11',
      name: 'Loa máy Bluetooth',
      slug: 'loa-may-bluetooth',
      category: 'Thiết bị',
      image: '/hinhanh/thietbi/loamay.jpg',
      price: 15,
      countInStock: 200,
      brand: 'vks',
      rating: 4.4,
      numReviews: 19,
      description: 'Loa máy kết nối mọi thiết bị',
    },
    {
      //_id: '12',
      name: 'Coctail',
      slug: 'coctail',
      category: 'Nước uống',
      image: '/hinhanh/nuocuong/coctail.jpg',
      price: 5,
      countInStock: 400,
      brand: 'coca',
      rating: 4.2,
      numReviews: 44,
      description: 'Nước uống đẹp mắt',
    },
    {
      //_id: '13',
      name: 'Lavie',
      slug: 'lavie',
      category: 'Nước uống',
      image: '/hinhanh/nuocuong/lavie.jpg',
      price: 2,
      countInStock: 1000,
      brand: 'pepsi',
      rating: 4.5,
      numReviews: 46,
      description: 'Nước uống Lon',
    },
    {
      //_id: '14',
      name: 'Bánh Chiên',
      slug: 'banh-chien',
      category: 'Đồ ăn vặt',
      image: '/hinhanh/doan/banhchien.jpg',
      price: 2,
      countInStock: 1000,
      brand: 'abc',
      rating: 4.5,
      numReviews: 46,
      description: 'Đồ ăn vặt',
    },
    {
      //_id: '15',
      name: 'Bánh Cuốn',
      slug: 'banh-cuon',
      category: 'Đồ ăn vặt',
      image: '/hinhanh/doan/banhcuon.jpg',
      price: 1.5,
      countInStock: 1200,
      brand: 'abc',
      rating: 4.1,
      numReviews: 200,
      description: 'Đồ ăn vặt',
    },
    {
      //_id: '16',
      name: 'Bánh Tráng Chiên',
      slug: 'banh-trang-chien',
      category: 'Đồ ăn vặt',
      image: '/hinhanh/doan/banhtrangchien.jpg',
      price: 1.2,
      countInStock: 700,
      brand: 'abc',
      rating: 3.1,
      numReviews: 212,
      description: 'Đồ ăn vặt',
    },
    {
      //_id: '17',
      name: 'Bánh Trộn',
      slug: 'banh-tron',
      category: 'Đồ ăn vặt',
      image: '/hinhanh/doan/banhtron.jpg',
      price: 1.6,
      countInStock: 900,
      brand: 'abc',
      rating: 2.6,
      numReviews: 76,
      description: 'Đồ ăn vặt',
    },
    {
      //_id: '18',
      name: 'Gà quay',
      slug: 'ga-quay',
      category: 'Đồ ăn vặt',
      image: '/hinhanh/doan/gaquay.jpg',
      price: 12,
      countInStock: 400,
      brand: 'abc',
      rating: 3.4,
      numReviews: 45,
      description: 'Đồ ăn vặt',
    },
    {
      //_id: '19',
      name: 'Hạt hạnh nhân',
      slug: 'hat-hanh-nhan',
      category: 'Đồ ăn vặt',
      image: '/hinhanh/doan/hathanhnhan.jpg',
      price: 13,
      countInStock: 300,
      brand: 'abc',
      rating: 4.1,
      numReviews: 66,
      description: 'Đồ ăn vặt',
    },
    {
      //_id: '20',
      name: 'Su su chiên',
      slug: 'su-su-chien',
      category: 'Đồ ăn vặt',
      image: '/hinhanh/doan/susuchien.jpg',
      price: 5,
      countInStock: 0,
      brand: 'abc',
      rating: 4.2,
      numReviews: 33,
      description: 'Đồ ăn vặt',
    },
  ],
};

export default data;
