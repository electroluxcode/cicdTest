<template>
  <div>
    <!-- 网站的头部
        0.navbar：可以创建一个标准的导航栏
        
        1.navbar-expand-lg（响应式导航栏）：当屏幕大于large，992px底下的菜单才会显示出来
        这里面的lg可以替换成sm，md，lg，xl，xxl
        后面如果跟着.collapse .navbar-collapse那么就可以实现隐藏
        换句话说，如果是比较小的话，那么就是显示一个 
        .collapse .navbar-collapse的内容
        大的话，就相当于把这里的标签给打掉了

        2.bg-dark：背景是一个暗色
        
        3.navbar-dark：文字的背景颜色是一个dark 

        4.fixed-top 固定在头部，fixed-bottom固定在底部

        5.sticky-top ：有点类似于fixed布局，但是前者可能会与文本中的界面进行冲突
        -->
    <!-- --------头部开始------------- -->
    <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <!-- 1.container容器中，从而使之在网页中呈现居中效果（或在导航栏内部居中） -->
      <div class="container">
        <!-- 文字当做logo -->
        <!-- 1.navbar-brand 用于logo,会变大变粗 -->
        <h1 href="#" class="navbar-brand">我在B站玩編程</h1>

        <!-- 
            1.navbar-toggler 用于我们的折叠插件和其他导航切换行为。这里可以类比成
            我们的collepse，变小的时候他自动就出现了，变大的时候它就自动消失了
            
            2.type一般设置成button
            3.data-bs-target 里面放一个class元素的选择,指事件的目标
            4.data-bs-toggle 指以什么类型事件触发
         -->
       

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <!--头部navbar navbar-nav 
        1.navbar-collapse 控制动画的样式
        2.collapse控制一开始显不显示
        
        -->
        <div class="collapse navbar-collapse " id="navmenu">
          <!--navbar-nav  
          1.ms-auto:ms-auto s的意思是start靠左显示 end md是靠右显示 mb-auto 意思是靠底下显示。mt-auto是靠上面显示
          2.navbar-nav 用于全高和轻量级导航 包括对下拉列表的支持

          -->
          <ul class="navbar-nav ms-auto">
            <!--margin start = margin left-->

            <div class="nav-link">前端知識</div>

            <li class="nav-item">
              <div class="nav-link">後端知識</div>
            </li>
            <li class="nav-item">
              <div class="nav-link">數據庫知識</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>


<!-- --------头部结束------------- -->


    <!-- 
    第一个自适应
    头部的一个介绍栏目
    这里面做到的自适应主要有两个 
    1. pc端的时候显示图片和文字，移动端的时候只显示文字（d-none,d-md-block）
    2.在文字的排版中，如果大于sm，那么就是一个靠左的排列，否则就是居中的一个排列
     -->

    <!-- 
        1.p-5  padding设置成5
        2.bg-dark 背景颜色设置成深色的
        3.text-light 文字颜色设置成白色的
        4.text-sm-start：尺寸放大就会靠左，不然就会居中
     -->
    <section class="p-5 bg-dark text-light text-center text-sm-start">
      <!--padding -->
      <div class="container">
          <!-- 1.d-flex是display:flex -->
        <div class="d-flex">
          <!--display flex-->
          <div>
              <!-- 1.text-warning就是一个警告色 -->
            <h1>成为一个<span class="text-warning">前端工程师</span></h1>
            <p class="my-4">
              <!-- 1.mx是横轴，my是纵轴  margin my是纵轴的距离 -->
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
              corporis quo, similique perferendis distinctio non eius consequuntur error
              obcaecati quaerat iusto quos fugiat rerum, unde omnis blanditiis ducimus
              asperiores quibusdam? Maiores nam deserunt earum exercitationem eligendi,
            </p>
            <!-- 
                1.btn 给定一个指定的样式
                2.btn-primary 给定一个指定的颜色
                3.btn-lg 给定一个指定的大小
             -->
            <button class="btn btn-primary btn-lg">开始编程之旅</button>
          </div>
          <!-- 1.w-50 宽度50%
               2. d-none d-md-block：默认display是none，
               但是如果尺寸大于medium那么就是block
           -->
          <img
            src="@/assets/img/showcase.svg"
            alt="showcase"
            class="w-50 d-none d-md-block"
          />
        </div>
      </div>
    </section>


    <!-- 第二个自适应 
    做到的自适应效果
    1.放大 左右排列
    2.缩小 上下排列
    3.这里自己写了一个自适应的样式关于
    input的宽度
    
    -->



    <!-- 1.d-md-flex：大于md的时候是flex布局，因为flex布局都是默认row排列的
    div默认是column排列的，所以说刚刚好能够做得到
        2.justify-content-between 左右两端对齐
        3.align-items-center 居中对齐
     -->
    <section class="p-5 bg-primary text-light">
      <div class="container">
        <div class="d-md-flex justify-content-between align-items-center">
          <h3 class="mb-3">现在注册账号开始编程之旅</h3>
          <div class="input-group news-input">
            <input type="text" class="form-control" placeholder="请输入你的邮箱" />
            <button class="btn btn-dark btn-lg">注册</button>
          </div>
        </div>
      </div>
    </section>



     <!-- 第三个自适应 
    做到的自适应效果
    1.卡片组件  pc端横向排列排三个，移动端一个一个排列
    div默认是竖着排的，利用col可以把他们统一到同一行中去
    2.栅栏系统
    -->

    <!-- 
        1.row下面的所有col都是在一行里面 
        2.第一层card 第二层 card-body 第三层 card-title
        和card-text
        -->

    <section class="p-5">
      <div class="container">
        <!--1.gutter 这个也是间隔的意思
        指的是row 下面的col的间隔
        -->
        <div class="row g-4">
          
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="card-title">前端知识</div>
                <div class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                  voluptatibus consequuntur vitae quo quibusdam
                </div>
                <a href="#" class="btn btn-primary mt-2">学习前端</a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-secondary text-light">
              <div class="card-body text-center">
                <div class="card-title">前端知识</div>
                <div class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                  voluptatibus consequuntur vitae quo quibusdam
                </div>
                <a href="#" class="btn btn-dark mt-2">学习前端</a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="card-title">前端知识</div>
                <div class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                  voluptatibus consequuntur vitae quo quibusdam
                </div>
                <a href="#" class="btn btn-primary mt-2">学习前端</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


     <!-- 第四个自适应 
    做到的自适应效果
    1.row 包含了 flex
        -->
    <section class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md">
            <img src="@/assets/img/1.svg" alt="1" class="img-fluid" />
          </div>
          <div class="col-md p-5">
            <h2>课程介绍</h2>
            <p class="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ea
              ratione corporis et provident. Quia!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum,
              aperiam assumenda vitae, beatae at sint quaerat consequatur maxime, hic
              voluptatum ex. Dolor minus perferendis magni autem exercitationem quis quos.
            </p>
            <a href="" class="btn btn-light">查看更多</a>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5 bg-dark text-light">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h2>课程介绍</h2>
            <p class="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ea
              ratione corporis et provident. Quia!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum,
              aperiam assumenda vitae, beatae at sint quaerat consequatur maxime, hic
              voluptatum ex. Dolor minus perferendis magni autem exercitationem quis quos.
            </p>
            <a href="" class="btn btn-light">查看更多</a>
          </div>

          <div class="col-md">
            <img src="@/assets/img/2.svg" alt="1" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>

    <section class="p-5">
      <div class="container">
        <h2 class="text-center">常见问题</h2>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate
                the
                <code>.accordion-flush</code> class. This is the first item's accordion
                body.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate
                the
                <code>.accordion-flush</code> class. This is the second item's accordion
                body. Let's imagine this being filled with some actual content.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate
                the
                <code>.accordion-flush</code> class. This is the third item's accordion
                222 exciting happening here in terms of content, but just
                filling up the space to make it look, at least at first glance, a bit more
                representative of how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>




     <!-- 
    第五个自适应
    1.根据缩小的比例 每行4个， 变成2个，最后变成1个（这个不用变，因为块级元素本来就是一行）
    2.一个row是12
     -->


     
    <section class="p-5 bg-primary">
      <div class="container">
        <h2 class="text-center text-light">讲师介绍</h2>
        <p class="lead text-center text-white mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, unde?
        </p>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src="@/assets/img/01-man.jpeg" class="mb-3 rounded-circle" />
                <h3 class="card-title">张三</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                  ratione!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src="@/assets/img/02-man.jpeg" class="mb-3 rounded-circle" />
                <h3 class="card-title">张三</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                  ratione!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src="@/assets/img/03-man.jpeg" class="mb-3 rounded-circle" />
                <h3 class="card-title">张三</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                  ratione!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src="@/assets/img/01-man.jpeg" class="mb-3 rounded-circle" />
                <h3 class="card-title">张三</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                  ratione!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5">
      <div class="container">
        <h2 class="text-center mb-4">联系我们</h2>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">电话：120XXXXXX</li>
          <li class="list-group-item">邮箱： bilibil@bili.com</li>
          <li class="list-group-item">地址：上海市XXXX区</li>
        </ul>
      </div>
    </section>

    <footer class="p-5 bg-dark text-white text-center">
      <div class="container">
        <p class="lead">Copyright &copy; 2021 我在B站玩編程</p>
      </div>
    </footer>

    <!-- <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script> -->
  </div>
</template>

<script>
export default {
  name: "home_vue",
  mounted() {
    // let toggler = document.querySelector(".navbar-toggler");
    // let collapsed = document.querySelector(".navbar-collapse");
    // toggler.onclick = () => {
    //   collapsed.classList.toggle("collapsed");
    //   toggler.classList.toggle("collapsed");
    //   collapsed.classList.toggle("show");
    // };
    console.log(this.$store.state.admin)
    console.log(this.$store.dispatch('admin/actionVuex'))
  },
};
</script>

<style  scoped>

@media (min-width: 768px) {
    .news-input{
        width: 50%;
    }
}

</style>
