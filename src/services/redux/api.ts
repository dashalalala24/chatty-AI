const checkRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
};

const fetchData = (url: RequestInfo | URL) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => checkRes(res));
};

export const getOrder = () => {
  // return fetchData('http://127.0.0.1:3000/api/v1/orders/');
  return {
    orderId: 'd48f3211c1ffccdc374f23139a9ab668',
    items: [
      {
        count: 2,
        selected_cartontype: 'NONPACK',
        box_num: 1,
        recommended_cartontype: 'YML',
        selected_carton: 'NONPACK',
        sel_calc_cube: 0.0,
        recommended_carton: 'YML',
        pack_volume: 2046.0,
        rec_calc_cube: 108000.0,
        goods_wght: 0.1,
        sku: 'af49bf330e2cf16e44f0be1bdfe337bd',
        barcode: 71536578010280,
        name: 'Виниловая пластинка Кровосток. 72 Seasons (2 LP)',
        pic: 'https://pngimg.com/uploads/vinyl/vinyl_PNG24.png',
        who: 'b7325da1af89a46059164618eb03ae38',
        trackingid: '6c304d5c2815ccd2ba5046c101294c24',
        a: 11.0,
        b: 6.0,
        c: 31.0,
        cargotype: [290, 600, 610, 950, 970, 980],
      },
      {
        selected_cartontype: 'NONPACK',
        box_num: 1,
        recommended_cartontype: 'YML',
        selected_carton: 'NONPACK',
        sel_calc_cube: 0.0,
        recommended_carton: 'YML',
        pack_volume: 2046.0,
        rec_calc_cube: 108000.0,
        goods_wght: 0.1,
        sku: '5f863de7185b639dc6a628704ed17484',
        barcode: 81468136721792,
        name: 'Электрогитара Fernandes Guitars LE1Z 3S 3-tone sunburst',
        pic: 'https://pngimg.com/uploads/electric_guitar/electric_guitar_PNG24174.png',
        who: 'b7325da1af89a46059164618eb03ae38',
        trackingid: '6c304d5c2815ccd2ba5046c101294c24',
        a: 11.0,
        b: 6.0,
        c: 31.0,
        cargotype: [290, 600, 610, 950, 970, 980],
      },
    ],
  };
};

export const getPackages = (orderId: string) => {
  // return fetchData(`http://127.0.0.1:3000/api/v1/packaging/${orderId}`);
  return {
    orderId: 'd48f3211c1ffccdc374f23139a9ab668',
    packages: [
      {
        packageId: 1,
        recommendedPacks: ['MYC', 'MYD', 'YMA'],
        items: [
          {
            size1: '11.0',
            size2: '6.0',
            size3: '31.0',
            type: ['290', '600', '610', '950', '970', '980'],
            name: 'Электрогитара Fernandes Guitars LE1Z 3S 3-tone sunburst',
            pic: 'https://pngimg.com/uploads/electric_guitar/electric_guitar_PNG24174.png',
            barcode: '81468136721792',
            sku: '5f863de7185b639dc6a628704ed17484',
            count: 1,
            weight: '0.1',
          },
        ],
      },
      {
        packageId: 2,
        recommendedPacks: ['MYC', 'MYD', 'YMA'],
        items: [
          {
            size1: '11.0',
            size2: '6.0',
            size3: '31.0',
            type: ['290', '600', '610', '950', '970', '980'],
            name: 'Виниловая пластинка Кровосток. 72 Seasons (2 LP)',
            pic: 'https://pngimg.com/uploads/vinyl/vinyl_PNG24.png',
            barcode: '71536578010280',
            sku: 'af49bf330e2cf16e44f0be1bdfe337bd',
            count: 17,
            weight: '0.1',
          },
        ],
      },
    ],
  };
};

// export const patchOrder = () => {
//   return fetchData(filterByCode(codes));
// };
