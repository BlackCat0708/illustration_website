<template>
  <div id="original-gallery">
    <div class="key-vision">
      <div class="vision">
        <img src="../assets/images/20231002.jpg" alt="key_vision">
      </div>
      <h1>Commision Gallery</h1>
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
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/urv1oc3qq2cipydlychp.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/urv1oc3qq2cipydlychp.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/dggk8hqrfkncljywwq7a.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/dggk8hqrfkncljywwq7a.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/smrk293u9ky6sbne1arl.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/smrk293u9ky6sbne1arl.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/vjjckypn27ryfdqdhakt.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/vjjckypn27ryfdqdhakt.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/t7e17nt4f998gmb6zgil.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/t7e17nt4f998gmb6zgil.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/ueqanddscsko093m2ebw.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699802913/Commision%20Gallery/ueqanddscsko093m2ebw.jpg',
          description: 'Commision',
          alt: 'Commision'
        }
      ],
      fasionDesign: [
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803227/Commision%20Gallery/tmko2aramlkpn46zsljo.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803230/Commision%20Gallery/jamofqthywssppoqgts2.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/easp0ehpegloh48j3def.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803228/Commision%20Gallery/hphz0dversjcuoebyu0n.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/n6uzczctzzc0aapfzn2o.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/anlmhmez3elmtbqy8sj4.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/f2fk0fpgxwq7lobkhe1u.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/f2fk0fpgxwq7lobkhe1u.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/i6kezsmglih3imsevotq.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/i6kezsmglih3imsevotq.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803228/Commision%20Gallery/xan0o51nqu8dlkg6rcvq.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803228/Commision%20Gallery/uyfctrsjv2gdisn19314.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803227/Commision%20Gallery/tajosglhlsfxtyxkii9d.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/o0qotmlibiftxvq0izdk.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/h3868bjwcvadaktgwtni.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803228/Commision%20Gallery/a7vnrb944lgnnkwevaxh.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803227/Commision%20Gallery/svyy7e2on0u4ga4igynm.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/xvzxjb9pqjmuwl6azqjk.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/cy9xbzgjtv5jtbecqai6.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803229/Commision%20Gallery/ofmdpcwscfh79mib2m8g.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803228/Commision%20Gallery/ufxmwarbczu1ponf5me8.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803228/Commision%20Gallery/ju1ulmc2rc03efflpfwm.jpg',
          description: 'Commision',
          alt: 'Commision'
        },
        {
          thumbnail: 'https://res.cloudinary.com/duplahipf/image/upload/v1699803227/Commision%20Gallery/uasck6sr8gikcv5jbml5.jpg',
          src: 'https://res.cloudinary.com/duplahipf/image/upload/v1699805316/Commision%20Gallery/blqg4ernbdbh0neh3kkm.jpg',
          description: 'Commision',
          alt: 'Commision'
        }
      ]
    }
  }
}
</script>
