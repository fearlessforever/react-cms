import React ,{Component} from 'react'

import Header from 'src/component/dashboard/header'
import Info from 'src/component/dashboard/info'
import {
  Box,
  BoxHeader,
  BoxBody
} from 'src/component/dashboard/box'
import {
  UPDATE_SIDEBAR_LIST
} from 'src/store/type'
import MyTable from 'src/component/dashboard/table'
import {connect} from 'react-redux'

class Tes extends Component{

  componentWillMount()
  {
    this.props.dispatch({
      type:UPDATE_SIDEBAR_LIST,
      value:[
        {iconClassname:'fa fa-dashboard',link:'',name:'Dashboard',itung:28},
        {iconClassname:'fa fa-table',link:'',name:'Sample 1',
          submenu:[
            {link:'sample.html',name:'Sample 2',pesan:'new'},
            {link:'sample2.html',name:'Sample 3'},
          ]
        },
        {iconClassname:'fa fa-weixin',link:'chat',name:'Chat',pesan:{klass:'label-warning',teks:'new'}},
      ]
    })
  }

  render(){
    const listInfo = data.listInfo.map((value,k)=>{
      return(
        <div key={`firstInfo-${k}`} className="col-lg-3 col-sm-6 col-xs-12">
        <Info {...value} />
        </div>
      )
    })

    const listInfo2 = data.listInfo2.map((val,k)=>{
      return(
        <div key={`secondInfo-${k}`} className="col-md-4 col-sm-6 col-xs-12">
          <div className={"main-box small-graph-box "+val.className}>
          <span className="value">{val.value}</span>
          <span className="headline">{val.headline}</span>
          <div className="progress">
          <div style={{width:val.progress}} role="progressbar" className="progress-bar">
          <span className="sr-only">{val.progress} Complete</span>
          </div>
          </div>
          { ( val.subinfo && (val.subinfo.length > 0) ) ? val.subinfo.map((val2,kk)=>{
            return(
              <span key={`subinfo-${k}-${kk}`} className="subinfo">
                <i className={val2.iconDesc}></i> {val2.desc}
              </span>
            )
          }) : null }

          </div>
        </div>
      )
    })

    return(
      <div>
        <Header title="Dashboard" />
        {listInfo}

        {listInfo2}

        <div className="col-xs-12">
        <Box>
          <BoxHeader>
            <h2 className="pull-left">Last orders</h2>
            <div className="filter-block pull-right">
              <div className="form-group pull-left">
                <input type="text" className="form-control" placeholder="Search..."/>
                <i className="fa fa-search search-icon"></i>
              </div>
              <button  className="btn btn-primary pull-right">
              <i className="fa fa-eye fa-lg"></i> View all orders </button>
            </div>
          </BoxHeader>

          <BoxBody>
            <MyTable className="table table-hover" {...dataTable}/>
          </BoxBody>
        </Box>
        </div>
      </div>
    )
  }
}
export default connect()(Tes)

//================================ Data Samples =====================================
const data = {
  listInfo:[
    {iconClassname:'fa fa-user red-bg',headline:'User',value:3000},
    {iconClassname:'fa fa-shopping-cart emerald-bg',headline:'Purchases',value:658},
    {iconClassname:'fa fa-money green-bg',headline:'Income',value:'8400',symbol:'&#36;'},
    {iconClassname:'fa fa-eye yellow-bg',headline:'Monthly Visits',value:12526},
  ],
  //==========================================================================
  listInfo2:[
    { value:'2.562',headline:'Users',progress:'60%',className:'red-bg',
      subinfo:[
        {iconDesc:'fa fa-arrow-circle-o-up',desc:'10% higher than last week'},
        {iconDesc:'fa fa-users',desc:'29 new users'},
      ]
    },
    { value:'69.600',headline:'Visits',progress:'84%',className:'emerald-bg',
      subinfo:[
        {iconDesc:'fa fa-arrow-circle-o-down',desc:'22% less than last week'},
        {iconDesc:'fa fa-globe',desc:'84.912 last week'},
      ]
    },
    { value:'923',headline:'Orders',progress:'42%',className:'green-bg',
      subinfo:[
        {iconDesc:'fa fa-arrow-circle-o-up',desc:'15% higher than last week'},
        {iconDesc:'fa fa-shopping-cart',desc:'8 new orders'},
      ]
    },
  ]
}

const dataTable = {
  header:['Order ID','Date','Customer','Status','Price',''],
  body:[
    [ <button className="link-button a">#5832</button>,
      '2013/08/08',
      <button className="link-button a">John Wayne</button>,
      <span className="label label-warning">On hold</span>,
      <span dangerouslySetInnerHTML={{__html: '&dollar; 923.93'}} />,
      <button className="link-button a">
        <span className="fa-stack">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
        </span>
      </button>
    ],
    [ <button className="link-button a">#8002</button>,
      '2013/08/08',
      <button className="link-button a">Robert De Niro</button>,
      <span className="label label-success">Completed</span>,
      <span dangerouslySetInnerHTML={{__html: '&dollar; 825.50'}} />,
      <button className="link-button a">
        <span className="fa-stack">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
        </span>
      </button>
    ],
    [ <button className="link-button a">#2547</button>,
      '2013/08/08',
      <button className="link-button a">Anthony Hopkins</button>,
      <span className="label label-info">Pending</span>,
      <span dangerouslySetInnerHTML={{__html: '&dollar; 1.625.50'}} />,
      <button className="link-button a">
        <span className="fa-stack">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
        </span>
      </button>
    ],
    [ <button className="link-button a">#9274</button>,
      '2013/08/08',
      <button className="link-button a">Charles Chaplin</button>,
      <span className="label label-danger">Cancelled</span>,
      <span dangerouslySetInnerHTML={{__html: '&dollar; 35.34'}} />,
      <button className="link-button a">
        <span className="fa-stack">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
        </span>
      </button>
    ],
    [ <button className="link-button a">#8463</button>,
      '2013/08/08',
      <button className="link-button a">Gary Cooper</button>,
      <span className="label label-success">Completed</span>,
      <span dangerouslySetInnerHTML={{__html: '&dollar; 34.199.99'}} />,
      <button className="link-button a">
        <span className="fa-stack">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
        </span>
      </button>
    ],
  ]
}
