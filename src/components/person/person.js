import QRCode from 'qrcode';
export default {
  data () {
    return {
      qrcodeImage: ''
    };
  },
  props: {
    personDetail: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  created () {
    this._calcWidth();
  },
  methods: {
    goBack () {},
    _calcWidth () {
      this.$nextTick(() => {
        // 生成二维码
        // let url = document.location.href;
        // url = url.replace('me', 'detail');
        let vcf = `
          BEGIN:VCARD
          VERSION:3.0
          FN:${this.personDetail.name}
          PHOTO;VALUE=uri:${this.personDetail.img}
          TEL;CELL;VOICE:${this.personDetail.phone}
          TEL;WORK;VOICE:${this.personDetail.tell}
          TEL;WORK;FAX:${this.personDetail.fax}
          EMAIL;TYPE=internet:${this.personDetail.email}
          URL:http://lzw.me
          orG:${this.personDetail.group}
          ROLE:${this.personDetail.department}
          TITLE:${this.personDetail.duty}
          ADR;WORK:${this.personDetail.address}
          REV:2012-12-27T08:30:02Z
          END:VCARD
        `;
        QRCode.toDataURL(vcf, (error, canvas) => {
          if (error) console.error(error)
          this.qrcodeImage = canvas;
        })
      });
    }
  }
};
