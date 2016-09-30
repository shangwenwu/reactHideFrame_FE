defineComponent(function(html) {
    return {
        template: html,
        loadAfter: function(Root) {

            // YS.js jQuery所有方法的操作，要在loadAfter里执行
            this.createTable();

            // //给DOM节点绑定事件
            $('.but').click(function() {
                alert(11)
            });

            //插入组件
            require(['./page/subArea1/index'], function(con) {
                Root.append('con', con);
            })

            var data = {
                "student": [{
                    "name": "张三",
                    "sex": "0",
                    "age": 18
                }, {
                    "name": "李四",
                    "sex": "0",
                    "age": 22
                }, {
                    "name": "妞妞",
                    "sex": "1",
                    "age": 18
                }]
            };

            var strHtml = '{{#each student}}' +
                '<tr>' +
                '<td>{{name}}</td>' +
                '<td>{{sex}}</td>' +
                '<td>{{age}}</td>' +
                '</tr> ' +
                '{{/each}}';

            var myTemplate = Handlebars.compile(strHtml);
            $('#tableList').html(myTemplate(data));

        },
        loadBefore: function(Root, callback) {

            console.log('home page 请求数据例子');

            Root.Ajax({
                url: 'getinfo',
                method: 'post',
                body: {},
                fail: (err) => {
                    console.log(err);
                },
                success: (data) => {
                    console.log(data);
                }
            })

            //渲染模板前 需要请求数据时，调用callback进行重新渲染
            setTimeout(function() { //请求延迟得到的数据，重新对模板进行渲染时，记的执行callback回调，重新渲染

                //Handlebars模板引擎渲染数据要在loadBefore进行
                var template = Handlebars.compile(html);
                var data = {
                    name: '999888777 2345254354342543 23423'
                };
                let result = template(data);
                callback(result);

            }, 10)

            //默认渲染的模板数据
            return html;
        },
        createTable: function() {

            //数据配置
            const dataSource = [{
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            }]

            //表头，显示列信息配置
            const columns = [{
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            }, {
                title: '操作',
                key: 'operation',
                tmpl: (text, record) => {
                    return '<span>' +
                        '<a>操作一' + record.name + '</a>' +
                        '<span className="ant-divider"></span>' +
                        '<a>操作二</a>' +
                        '<span className="ant-divider"></span>' +
                        '<a className="ant-dropdown-link">' +
                        '更多 >' +
                        '</a>' +
                        '</span>'
                }
            }]

            //选择框配置
            const rowSelection = {
                onChange(selectedRowKeys, selectedRows) {
                    console.log(selectedRowKeys, selectedRows);
                },
                onSelect(record, selected, selectedRows) {
                    console.log(record, selected, selectedRows);
                },
                onSelectAll(selected, selectedRows, changeRows) {
                    console.log(selected, selectedRows, changeRows);
                },
            }

            //页码及选择每页显示条数配置
            const pagination = {
                total: dataSource.length, //数据总条数
                //defaultPageSize: 3, //初始时显示条数，默认为10
                showSizeChanger: true, //是否显示，选择改变每页显示多少条数据
                pageSizeOptions: ['3', '10', '20', '30', '40', '50'],
                onShowSizeChange(current, pageSize) { //选择改变每页的回调
                    console.log('Current: ', current, '; PageSize: ', pageSize);
                },
                onChange(current) { //每页时的回调
                    console.log('Current: ', current);
                }
            };


            //方法调用
            YS.table({
                domID: 'table1',
                dataSource: dataSource, //类型Array 渲染数据
                columns: columns, //类型Array 列配置
                pagination: pagination, //是否显示分页
                rowSelection: rowSelection, //可选 checkBox选择框
            });
        }
    }
})