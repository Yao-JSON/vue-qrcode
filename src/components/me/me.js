import Back from 'components/back/back.vue';
import Split from 'components/split/split.vue';
import BScroll from 'better-scroll';
import Person from 'components/person/person.vue';

import Vue from 'vue';
Vue.filter('noText', function (value) {
  if (value === '') {
    return '暂无信息';
  };
  return value;
})
export default {
  data () {
    return {
      base: [],   // 基础信息
      main: [],   // 主要信息
      others: [], // 其他信息
      personShow: false,
      qrcodeImage: ''
    };
  },
  props: {
    personDetail: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  created () {
    let base = [
        {key: '名称', value: this.personDetail.name},
        {key: '手机号码', value: this.personDetail.phone},
        {key: '我的二维码', qrcode: true}];
    let main = [{key: '固定电话', value: this.personDetail.tell},
      {key: 'email', value: this.personDetail.email},
      {key: '传真', value: this.personDetail.fax},
      {key: 'QQ', value: this.personDetail.qq},
      {key: '传真', value: this.personDetail.weixin}];
    let others = [{key: '组织机构', value: this.personDetail.group},
      {key: '部门', value: this.personDetail.department},
      {key: '职务', value: this.personDetail.duty},
      {key: '岗位', value: this.personDetail.job},
      {key: '地址', value: this.personDetail.address}];
    this.base = base;
    this.main = main;
    this.others = others;
    this._refreshScroll();
  },
  computed: {
    backText () {
      if (this.personShow) {
        return '个人信息';
      }
      return '详情';
    },
    centerText () {
      if (this.personShow) {
        return '我的二维码';
      }
    }
  },
  methods: {
    _refreshScroll () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs['me-content'], {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    _showPerson () {
      this.personShow = true;
    },
    _goBack () {
      this.personShow = false;
    }
  },
  components: { Back, Split, Person }
};
