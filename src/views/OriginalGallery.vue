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
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793388/original%20gallery/klvwob0pmbp69zluryvh.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793388/original%20gallery/sklnmznnd1wd0eyoobjs.jpg',
          description: '青空のクリームソーダ',
          alt: '青空のクリームソーダ'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793388/original%20gallery/tlyrcf7stb8yb54efaih.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793387/original%20gallery/cv0bu6nws2dqfuog4ddj.jpg',
          description: 'Happy New Year 2022',
          alt: 'Happy New Year 2022'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793387/original%20gallery/waykqy8dqkbdmv8cby52.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793387/original%20gallery/waykqy8dqkbdmv8cby52.jpg',
          description: 'Cat Collection',
          alt: 'Cat Collection'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793387/original%20gallery/jhwyrjzrt756kgc4pzx4.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793387/original%20gallery/uqwx3ldjlte9bgvogofn.jpg',
          description: '桜',
          alt: '桜'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793387/original%20gallery/uefa1yrrjfg5vlhwvnlv.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793387/original%20gallery/wma6fnsxehyqz4pcphko.jpg',
          description: 'NAMUNA',
          alt: 'NAMUNA'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793388/original%20gallery/mkceqow9xq2vkbeyglpt.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699793388/original%20gallery/lwtfridydhz0nav1mkbp.jpg',
          description: '2023 YEAR OF THE RABBIT',
          alt: '2023 YEAR OF THE RABBIT'
        }
      ],
      fasionDesign: [
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794288/original%20gallery/lfmmsplwxqb2jdbbnd7r.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794286/original%20gallery/bi5cj2o0ebv8ycgo0m9k.jpg',
          description: '2022春夏裝',
          alt: '2022春夏裝'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794288/original%20gallery/noudlv1vwc1limpiyjah.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794288/original%20gallery/zfpz0zlmn4wx4ommfw6y.jpg',
          description: '2023旗袍',
          alt: '2023旗袍'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794286/original%20gallery/ob463idgpf2fozdejtc7.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794288/original%20gallery/bxgdma4vg5hjn2yiplov.jpg',
          description: '夢百貨 電梯小姐 / 服務台小姐',
          alt: '夢百貨 電梯小姐 / 服務台小姐'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794287/original%20gallery/jcidavfkkxq7gixpb42f.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794286/original%20gallery/oaqjhvnysz2yhtqnsoeh.jpg',
          description: '護士服',
          alt: '護士服'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794288/original%20gallery/nhnyvpbdilipnwm39ak2.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794287/original%20gallery/fm065sw0s94drdaam49x.jpg',
          description: '私服',
          alt: '私服'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794287/original%20gallery/nrfra8kbvim9zoywcz8t.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794287/original%20gallery/mtmgai0tqocvkagzkpto.jpg',
          description: '2021夏季祭典浴衣',
          alt: '2021夏季祭典浴衣'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794287/original%20gallery/msgr6jclixyfejrbf755.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794288/original%20gallery/m5lrunglg43y68uibdfx.jpg',
          description: '2022 Halloween',
          alt: '2022 Halloween'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794287/original%20gallery/wsgimkbz01ou9btocjr4.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794286/original%20gallery/sagb9gfzhu37dvn1wjed.jpg',
          description: '雨衣',
          alt: '雨衣'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794289/original%20gallery/tdfw5m875iipgzbgyyzl.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794289/original%20gallery/jaddy5orz4r1omanhraq.jpg',
          description: '私服',
          alt: '私服'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794287/original%20gallery/lxcwzalf5fhauwrk8msa.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794289/original%20gallery/kodr2d34gkyzd9od7cwv.jpg',
          description: '2021春夏裝',
          alt: '2021春夏裝'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794286/original%20gallery/ilv3fkyculoh3stgkquv.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794286/original%20gallery/ax6to79xbtf9kdkoecpb.jpg',
          description: '2020偶像服',
          alt: '2020偶像服'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794287/original%20gallery/wgbqfd1p34dupeounicj.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699794288/original%20gallery/l2of4rzrhzvhd9avpnjp.jpg',
          description: '2021偶像服',
          alt: '2021偶像服'
        }
      ]
    }
  }
}
</script>
