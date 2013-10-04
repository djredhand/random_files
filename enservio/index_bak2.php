<?php

defined('_JEXEC') or die;

include 'includes/setup.php';


$menu = &JSite::getMenu();
$active = $menu->getActive();
$menuname = $active->title;
$parentId = $active->tree[0];
$parentName = $menu->getItem($parentId)->title;    
  
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <script type="text/javascript">var llactid=13783;</script>
  <script src="https://trackalyzer.com/trackalyze_secure.js"></script>
  <jdoc:include type="head" />
</head>
<body class="<?php echo implode(' ', $body_classes); ?>">

 <div class="grid">
  <header class="clearfix">
    <h1><a href="<?php echo JURI::base() ?>" class="logo" title="Enservio logo"></a></h1>

    <div class="searchWrap clearfix">
      <form action="<?php echo JRoute::_('index.php?option=com_search&view=search&searchword='); ?>" method="post">
      <div class="search">
        <label for="mod-search-searchword"> </label><input name="searchword" id="mod-search-searchword" maxlength="20" class="searchBox" type="text" size="20" value=""><input type="submit" value="" class="searchBtn" onClick="this.form.searchword.focus();">  
        <input type="hidden" name="task" value="search">
        <input type="hidden" name="option" value="com_search">
        <input type="hidden" name="Itemid" value="101">
      </div>
    </form>
    </div>

    <div class="utilities clearfix">
      <jdoc:include type="modules" name="utilities" />
    <jdoc:include type="modules" name="socialMedia" />
    </div>
    
    <div class="mainMenu clearfix">
    <jdoc:include type="modules" name="mainMenu" />
    </div>
  </header>

  <?php if ( $is_home ) : ?>
  <div class="visual clearfix">
    <ul id="nav" class="slidetabs">
      <li class="active">      
        <span class="switchOne">
          <div class="submitClaim down">
            <jdoc:include type="modules" name="btnSubmitClaim" />
          </div>
          <jdoc:include type="modules" name="panel_one_text" style="accordion" />
        </span>
      </li>

      <li>  
        <span class="switchTwo">
                <div class="submitClaim down">
            <jdoc:include type="modules" name="btnSubmitClaim" />
          </div>
          <jdoc:include type="modules" name="panel_two_text" style="accordion" />
        </span>
      </li>

      <li>
        <span class="switch">
                <div class="submitClaim down">
            <jdoc:include type="modules" name="btnSubmitClaim" />
          </div>
          <jdoc:include type="modules" name="panel_three_text" style="accordion" />
        </span>
      </li>

      <li>
        <span class="switch">
                <div class="submitClaim down">
            <jdoc:include type="modules" name="btnSubmitClaim" />
          </div>
          <jdoc:include type="modules" name="panel_four_text" style="accordion" />
        </span>
      </li>

      <li>
        <span class="switch">
                <div class="submitClaim down">
            <jdoc:include type="modules" name="btnSubmitClaim" />
          </div>
          <jdoc:include type="modules" name="panel_five_text" style="accordion" />
        </span>
      </li>
      
      <li>
        <span class="switch">
                <div class="submitClaim down">
            <jdoc:include type="modules" name="btnSubmitClaim" />
          </div>
          <jdoc:include type="modules" name="panel_seven_text" style="accordion" />
        </span>
      </li>
       
      <li>
        <span class="switch">
                <div class="submitClaim down">
            <jdoc:include type="modules" name="btnSubmitClaim" />
          </div>
          <jdoc:include type="modules" name="panel_six_text" style="accordion" />
        </span>
      </li>
    </ul>
    <div class="slideshow">
      <div data-red-dots-container="true" class="red-dots-box first">
      <jdoc:include type="modules" name="panel_one_image" />
        <div style="display: none">
              <div data-red-dot="true" data-x="565" data-y="300"><span>Flatscreen television:</span> $2,200</div>
                <div data-red-dot="true" data-x="640" data-y="280"><span>Sectional sofa:</span> $1,230</div>
                <div data-red-dot="true" data-x="600" data-y="147"><span>Dining table set:</span> $655</div>
                <div data-red-dot="true" data-x="680" data-y="133"><span>Microwave:</span> $289</div>
                <div data-red-dot="true" data-x="740" data-y="263"><span>Wall Unit:</span> $849</div>
                <div data-red-dot="true" data-x="880" data-y="143"><span>Patio set:</span> $270</div>
          </div>
        </div>
    <jdoc:include type="modules" name="panel_two_image" />
    <jdoc:include type="modules" name="panel_three_image" />
    <jdoc:include type="modules" name="panel_four_image" />
    <jdoc:include type="modules" name="panel_five_image" />
    <jdoc:include type="modules" name="panel_seven_image" />
    <div data-red-dots-container="true">
            <jdoc:include type="modules" name="panel_six_image" />
            <div style="display: none">
               <div data-red-dot="true" data-x="700" data-y="270"><span>Contents value:</span> $282,000</div>
                <div data-red-dot="true" data-x="896" data-y="30"><span>Contents value:</span> $325,000</div>
                <div data-red-dot="true" data-x="560" data-y="120"><span>Contents value:</span> $285,000</div>
                <div data-red-dot="true" data-x="716" data-y="75"><span>Contents value:</span> $270,000</div>
                <div data-red-dot="true" data-x="820" data-y="205"><span>Contents value:</span> $370,000</div>
            </div>
        </div> 
    <img src="images/six.jpg" alt="Analytic consulting and software solutions" border="" />
    </div>
  </div>
    
  <br class="clear" />

  <div class="main clearfix">
        <div class="leftCol equal-column-2">
          <div class="left-top clearfix">
          <div class="about equal-column">
            <jdoc:include type="modules" name="homeAbout" style="xhtml" />
          </div>
          <div class="news equal-column">
            <jdoc:include type="modules" name="homeNews" style="xhtml" />
          </div>
        </div>
        <div class="events">
          <jdoc:include type="modules" name="homeEvents" style="xhtml" />
          <div class="nav">
            <a class="prev" href="#"><img src="/images/btn_previous.gif" border="0" alt="" /></a>
            <a class="next" href="#"><img src="/images/btn_next.gif" border="0" alt="" /></a>
          </div>
        </div>
        </div>
        <div class="rightCol equal-column-2 clearfix">
        <div class="blog">
          <jdoc:include type="modules" name="homeBlog" style="xhtml" />
        </div>
        <div class="nicb">
          <jdoc:include type="modules" name="homeNICB" style="xhtml" />
        </div>
        <div class="whitepapers">
          <jdoc:include type="modules" name="homeWhitepaper" style="xhtml" />
        </div>
        <div class="videos">
          <jdoc:include type="modules" name="homeVideos" style="xhtml" />
        </div>
        </div>
  </div>

  <?php else : ?>

  <?php if ( $this->countModules('sectionalGraphic') ) : ?>
  <div class="sectionalHeader">
    <jdoc:include type="modules" name="sectionalGraphic" style="xhtml" />
  </div>
  <?php endif; ?>

  <div class="main">
    <?php if ( $this->countModules('btnSubmitClaim') ) : ?>
    <div class="submitClaim">
      <jdoc:include type="modules" name="btnSubmitClaim" style="xhtml" />
    </div>
    <?php endif; ?>
    
    <?php if ( $this->countModules('leftMenu') ) : ?>
    <div class="leftMenu">
    <h2><?php echo $parentName; ?></h2>
    <jdoc:include type="modules" name="leftMenu" style="xhtml" />
    </div>
    <?php endif; ?>
    
    <?php if ( $this->countModules('library') ) : ?>
    <div class="library"><jdoc:include type="modules" name="library" style="xhtml" /></div>
    <?php endif; ?>
      
    <div class="contentWrap">

    <div class="content">
        <div id="system-message">
          <jdoc:include type="message" />
       </div>
       <jdoc:include type="component" />
    </div>         
    </div>  
  </div>

  <?php endif; ?>
  
  <footer>
    <jdoc:include type="modules" name="footer" style="xhtml" />
  </footer>
  </div>
  <script src="<?php theme_url('core/js/custom.js'); ?>"></script>
  <script src="<?php theme_url('core/js/form-preview/preview.js'); ?>"></script>
<script>
  window.show_processing = function(){
    var gif_overlay = jQuery('<div id="gif-overlay"></div>');
    var gif_wrap = jQuery('<div id="gif-wrap"></div>');
    var gif = jQuery('<img class="form-loading-image" src="/images/loading40.gif"/> ');
    
    gif_overlay.css({
      width:'100%',
      height:'100%',
      position:'absolute',
      zIndex:'999999',
      top:'0'
    })

    gif_wrap.css({
      width:'910px',
      margin:'270px auto',
      position: 'relative'
    })

    gif.css({
      width:'910px'
    })

    jQuery('body').append(gif_overlay);
    gif_overlay.append(gif_wrap);
    gif_wrap.append(gif);

    window.delayed_alert();
  }

  window.close_processing = function(){
    jQuery('#gif-overlay').remove();
  }

window.check_for_processing = function(){
  var gif_overlay = jQuery('#gif-overlay');
  if(gif_overlay.length > 0){
    return true
  }
}

  jQuery(document).ready(function(){
    var finish_clone = jQuery('<input type="button" value="Submit" id="Finish_clone" class="rsform-submit-button">')
    var finish = jQuery('#Finish')

    window.delayed_alert = function () {
      window.timeout = window.setTimeout(window.slow_alert, 1000);
    }

    window.slow_alert = function() {
      jQuery('#userForm').submit();
      window.clear_alert();
    }

    window.clear_alert = function() {
      window.clearTimeout(window.timeout);
    }


    finish.css({display:'hidden'});
    finish.after(finish_clone);
    finish.remove();
    finish_clone.attr('id','Finish');


    jQuery('#Finish').click(function(){
      window.show_processing();
      if(window.check_for_processing){

      }
      //jQuery('#userForm').submit();
    })
  })
  </script>
</body>
</html>