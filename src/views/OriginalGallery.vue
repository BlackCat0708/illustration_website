<template>
  <div id="original-gallery">
    <div class="key-vision">
      <div class="vision">
        <img src="../assets/original/2022051901.jpg" alt="key_vision">
      </div>
      <h1>Original Gallery</h1>
    </div>

    <div id="illustration">
      <div class="container">
        <div class="title">
          <img src="../assets/images/BLACKCAT_foot.svg">
          <h1>Illustration</h1>
        </div>
        <b-row class="set">
          <silent-box :gallery="illustration"></silent-box>
        </b-row>
      </div>
    </div>

    <div id="fashionDesign">
      <div class="container">
        <div class="title">
          <img src="../assets/images/BLACKCAT_foot.svg">
          <h1>Fashion Design</h1>
        </div>
        <b-row class="set">
          <silent-box :gallery="fasionDesign"></silent-box>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      illustration: [
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611276/original%20gallery/2022051901_square_dfzfbk.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611276/original%20gallery/2022051901_nne11h.jpg',
          description: '青空のクリームソーダ',
          alt: '青空のクリームソーダ'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611269/original%20gallery/20210904_ybit1c.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611269/original%20gallery/20210904_ybit1c.jpg',
          description: 'Cat Collection',
          alt: 'Cat Collection'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611275/original%20gallery/20220303_square_qaffrh.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611275/original%20gallery/20220303_pz57tb.jpg',
          description: 'Sweet Strawberry',
          alt: 'Sweet Strawberry'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611273/original%20gallery/2022040400_square_qwqmjb.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611273/original%20gallery/2022040400_fljqox.jpg',
          description: '海風',
          alt: '海風'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611269/original%20gallery/2021031903_square_kiqihf.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611270/original%20gallery/2021031903_pk0pxm.jpg',
          description: 'Glitter',
          alt: 'Glitter'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611275/original%20gallery/2021122501_square_ajf0x3.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657611272/original%20gallery/2021122501_kwbnhf.jpg',
          description: 'Happy New Year 2022',
          alt: 'Happy New Year 2022'
        }
      ],
      fasionDesign: [
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612871/original%20gallery/20210725_square_ezb5xn.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612873/original%20gallery/20210725_whwgha.jpg',
          description: '2021偶像服',
          alt: '2021偶像服'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612869/original%20gallery/202108010101_square_mmzi5l.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612870/original%20gallery/202108010101_er2bw0.jpg',
          description: '2021偶像服 ⧓ 隊長',
          alt: '2021偶像服 ⧓ 隊長'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612869/original%20gallery/202108010201_square_zonfwt.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612870/original%20gallery/202108010201_avkxr5.jpg',
          description: '2021偶像服 ⧓ 成員1',
          alt: '2021偶像服 ⧓ 成員1'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612870/original%20gallery/202108010301_square_zv723r.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612873/original%20gallery/202108010301_i1f3mb.jpg',
          description: '2021偶像服 ⧓ 成員2',
          alt: '2021偶像服 ⧓ 成員2'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612864/original%20gallery/202108010401_square_odi4se.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612871/original%20gallery/202108010401_sscqtn.jpg',
          description: '2021偶像服 ⧓ 成員3',
          alt: '2021偶像服 ⧓ 成員3'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612867/original%20gallery/20210708_square_psuaym.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612868/original%20gallery/20210708_rkjbmj.jpg',
          description: '2021夏季祭典浴衣',
          alt: '2021夏季祭典浴衣'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612869/original%20gallery/2021040101_square_v8nagc.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612873/original%20gallery/2021040101_jyfu29.jpg',
          description: '2021春夏裝',
          alt: '2021春夏裝'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612867/original%20gallery/20210927_square_ytbd0v.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612867/original%20gallery/20210927_myklyt.jpg',
          description: '護士服',
          alt: '護士服'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612868/original%20gallery/20220113_square_hg3f7b.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612868/original%20gallery/20220113_os2nqr.jpg',
          description: '夢百貨 電梯小姐 / 服務台小姐',
          alt: '夢百貨 電梯小姐 / 服務台小姐'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612871/original%20gallery/2021071703%E5%B0%8F_square_oraxfa.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612872/original%20gallery/2021071703%E5%B0%8F_v5yuyr.jpg',
          description: '私服',
          alt: '私服'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612868/original%20gallery/20210825%E5%B0%8F_square_bp2t4a.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612870/original%20gallery/20210825%E5%B0%8F_f5bnkj.jpg',
          description: '私服',
          alt: '私服'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612864/original%20gallery/20201119_square_k13wam.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657612866/original%20gallery/20201119_hnv2vv.jpg',
          description: '2020偶像服',
          alt: '2020偶像服'
        }
      ]
    }
  }
}
</script>
