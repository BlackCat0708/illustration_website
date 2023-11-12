<template>
  <div id="fan-art-gallery">
    <div class="key-vision">
      <div class="vision">
        <img src="../assets/fan_art/20220310無字00.jpg" alt="key_vision">
      </div>
      <h1>Fan Art Gallery</h1>
    </div>

    <div id="fanArtIllustration">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      illustration: [
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799773/Fan%20Art%20Gallery/cw4ccwhodr8xerlthtnf.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799773/Fan%20Art%20Gallery/rug4oc6mdxzkuvkrxrg6.jpg',
          description: 'Sunset Party',
          alt: 'Sunset Party'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799772/Fan%20Art%20Gallery/mrfywvqj1u3rrxnpo6w3.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799772/Fan%20Art%20Gallery/zd9guitz0jew6qrwec7s.jpg',
          description: 'Tulip',
          alt: 'Tulip'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631535/Fan%20Art%20Gallery/2021081200_h1kllm.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631535/Fan%20Art%20Gallery/2021081200_h1kllm.jpg',
          description: 'メッセージ',
          alt: 'メッセージ'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631529/Fan%20Art%20Gallery/2021022700_square_uha3th.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631545/Fan%20Art%20Gallery/2021022700_edmjkq.jpg',
          description: 'The Brightest Star in the Sky',
          alt: 'The Brightest Star in the Sky'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631536/Fan%20Art%20Gallery/2021021900_square_pkhxyf.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631544/Fan%20Art%20Gallery/2021021900_ojetm2.jpg',
          description: 'Flash',
          alt: 'Flash'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631537/Fan%20Art%20Gallery/2021112700_square_ukotj3.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631536/Fan%20Art%20Gallery/2021112700_fafugf.jpg',
          description: 'The reward in a journey',
          alt: 'The reward in a journey'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631525/Fan%20Art%20Gallery/2022070400_sruare_e8a6hm.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631547/Fan%20Art%20Gallery/2022070400_rweauq.jpg',
          description: '花火',
          alt: '花火'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631532/Fan%20Art%20Gallery/2021071100_square_giemiy.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631530/Fan%20Art%20Gallery/2021071100_vmhzwg.jpg',
          description: 'Moonlight',
          alt: 'Moonlight'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799773/Fan%20Art%20Gallery/iumgrhetydijtburv1qy.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799773/Fan%20Art%20Gallery/srgc7lpcozoxph0bwuxh.jpg',
          description: '「月が綺麗ですね」',
          alt: '「月が綺麗ですね」'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631535/Fan%20Art%20Gallery/2021082800_square_cmxtfw.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631534/Fan%20Art%20Gallery/2021082800_iipvvu.jpg',
          description: '4',
          alt: '4'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631528/Fan%20Art%20Gallery/2021051100_square_uivyjs.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631527/Fan%20Art%20Gallery/2021051100_xa5qq5.jpg',
          description: '三原色旅程的起始線',
          alt: '三原色旅程的起始線'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631535/Fan%20Art%20Gallery/2021111401_square_t1iwbt.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631537/Fan%20Art%20Gallery/2021111401_m7bupe.jpg',
          description: 'もっと先へ 先へ 先へ 先へ',
          alt: 'もっと先へ 先へ 先へ 先へ'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799773/Fan%20Art%20Gallery/a3gyxvofaguim1vx98pc.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799773/Fan%20Art%20Gallery/dvtbqjmfgekibztavtdz.jpg',
          description: '夢野幻太郎誕生祭2023',
          alt: '夢野幻太郎誕生祭2023'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799774/Fan%20Art%20Gallery/yx3rkewanvqotovm1veg.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799774/Fan%20Art%20Gallery/yx3rkewanvqotovm1veg.jpg',
          description: '青葉つむぎ誕生祭2023',
          alt: '青葉つむぎ誕生祭2023'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799771/Fan%20Art%20Gallery/a3gby9r3l2u0tyejlbp0.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799771/Fan%20Art%20Gallery/nfiofnkluhxfb7wognrq.jpg',
          description: '春川宙誕生祭2023',
          alt: '春川宙誕生祭2023'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799772/Fan%20Art%20Gallery/rfezzfsral7hlxhqlpcv.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799772/Fan%20Art%20Gallery/tzypx7wtuwjh9mlemv5b.jpg',
          description: 'メリークリスマス',
          alt: 'メリークリスマス'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799774/Fan%20Art%20Gallery/pqo3nnxzdozw66uokqgv.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799773/Fan%20Art%20Gallery/zdk1iz7nqceeolj4wxdn.jpg',
          description: 'Candy Party',
          alt: 'Candy Party'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631525/Fan%20Art%20Gallery/20220310%E7%84%A1%E5%AD%9700_square_bbprue.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631526/Fan%20Art%20Gallery/20220310%E7%84%A1%E5%AD%9700_pg14us.jpg',
          description: 'どこかへ',
          alt: 'どこかへ'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631540/Fan%20Art%20Gallery/2022012700_square_enciz5.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631539/Fan%20Art%20Gallery/2022012700_x57o2m.jpg',
          description: '光の三原色の結びめ',
          alt: '光の三原色の結びめ'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631541/Fan%20Art%20Gallery/2022060800_square_oyr16o.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631540/Fan%20Art%20Gallery/2022060800_x8976i.jpg',
          description: 'Puzzle Game',
          alt: 'Puzzle Game'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631532/Fan%20Art%20Gallery/2021081400_cnsekq.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631532/Fan%20Art%20Gallery/2021081400_cnsekq.jpg',
          description: 'お祭り',
          alt: 'お祭り'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631538/Fan%20Art%20Gallery/2021121702_jsvies.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631538/Fan%20Art%20Gallery/2021121702_jsvies.jpg',
          description: '雪合戦',
          alt: '雪合戦'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631539/Fan%20Art%20Gallery/2021121703_vdb6gt.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631539/Fan%20Art%20Gallery/2021121703_vdb6gt.jpg',
          description: '雪合戦',
          alt: '雪合戦'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799771/Fan%20Art%20Gallery/ozxnbmoogkgxkcwxg9fp.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799771/Fan%20Art%20Gallery/zmoipsy7smqjdsuy4odi.jpg',
          description: 'Dream',
          alt: 'Dream'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631525/Fan%20Art%20Gallery/%E5%B0%8F%E8%AA%AA%E5%B0%81%E9%9D%A2%E8%A3%81%E5%88%87_20220619%E6%9B%B4%E6%96%B0__square_i4uoum.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631526/Fan%20Art%20Gallery/%E5%B0%8F%E8%AA%AA%E5%B0%81%E9%9D%A2%E8%A3%81%E5%88%87_20220619%E6%9B%B4%E6%96%B0_solpav.jpg',
          description: '《夏末的幽靈不擅於說謊》小說封面',
          alt: '《夏末的幽靈不擅於說謊》小說封面'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799771/Fan%20Art%20Gallery/syxsuxdteerfecggumqx.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799774/Fan%20Art%20Gallery/mopbrpbnx6nurkrumnkh.jpg',
          description: '紫陽花',
          alt: '紫陽花'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799772/Fan%20Art%20Gallery/islznto7bes73qbs8udn.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799772/Fan%20Art%20Gallery/efbzo30emnabm0yxahzg.jpg',
          description: 'Switch7周年',
          alt: 'Switch7周年'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631530/Fan%20Art%20Gallery/2021070601_square_aivlvx.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631531/Fan%20Art%20Gallery/2021070601_rhsv3t.jpg',
          description: '七夕',
          alt: '七夕'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631527/Fan%20Art%20Gallery/2021042000_square_qgnsnd.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1657631528/Fan%20Art%20Gallery/2021042000_vczwij.jpg',
          description: '涙',
          alt: '涙'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799772/Fan%20Art%20Gallery/jvwjf43btipnmpqgt9sk.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699799772/Fan%20Art%20Gallery/jvwjf43btipnmpqgt9sk.jpg',
          description: '「はじめる」',
          alt: '「はじめる」'
        }
      ]
    }
  }
}
</script>
