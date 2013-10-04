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
	<jdoc:include type="head" />
</head>
<body<?php echo ( $is_home ) ? ' class="home"' : ' class="interior"'; ?>>

 <div class="grid">
	<header class="clearfix">
	  <h1><a href="<?php echo JURI::base() ?>" class="logo" title="Enservio logo"></a></h1>

	  <div class="searchWrap" class="clearfix">
	  	<form action="<?php echo JRoute::_('index.php?option=com_search&view=search'); ?>" method="post">
			<div class="search">
				<label for="mod-search-searchword"> </label><input name="searchword" id="mod-search-searchword" maxlength="20" class="searchBox" type="text" size="20" value=""><input type="submit" value="" class="searchBtn" onclick="this.form.searchword.focus();">	
				<input type="hidden" name="task" value="search">
				<input type="hidden" name="option" value="com_search">
				<input type="hidden" name="Itemid" value="101">
			</div>
		</form>
	  </div>

	  <div class="utilities" class="clearfix">
	  	<jdoc:include type="modules" name="utilities" style="xhtml" />
		<jdoc:include type="modules" name="socialMedia" style="xhtml" />
	  </div>
	  
	  <div class="mainMenu clearfix">
		<jdoc:include type="modules" name="mainMenu" style="xhtml" />
	  </div>
	</header>

	<?php if ( $is_home ) : ?>
	<div class="visual clearfix">
		<ul id="nav" class="slidetabs">
			<li class="active">		  
				<span class="switchOne">
					<div class="submitClaim down">
						<jdoc:include type="modules" name="btnSubmitClaim" style="xhtml" />
					</div>
					<jdoc:include type="modules" name="panel_one_text" style="xhtml" />
				</span>
			</li>

			<li>
				<span class="switchTwo">
					<jdoc:include type="modules" name="panel_two_text" style="xhtml" />
				</span>
			</li>

			<li>
				<span class="switch">
					<jdoc:include type="modules" name="panel_three_text" style="xhtml" />
				</span>
			</li>

			<li>
				<span class="switch">
					<jdoc:include type="modules" name="panel_four_text" style="xhtml" />
				</span>
			</li>

			<li>
				<span class="switch">
					<jdoc:include type="modules" name="panel_five_text" style="xhtml" />
				</span>
			</li>
				  
			<li>
				<span class="switch">
					<jdoc:include type="modules" name="panel_six_text" style="xhtml" />
				</span>
			</li>
		</ul>
	  <div class="slideshow">
	  	<div data-red-dots-container="true" class="red-dots-box first">
	  		<img src="images/panel1.jpg" alt="" border="" />
	  		<div style="display: none">
            	<div data-red-dot="true" data-x="565" data-y="300"><span>Flatscreen television:</span> $2,200</div>
                <div data-red-dot="true" data-x="640" data-y="280"><span>Sectional sofa:</span> $1,230</div>
                <div data-red-dot="true" data-x="600" data-y="147"><span>Dining table set:</span> $655</div>
                <div data-red-dot="true" data-x="680" data-y="133"><span>Microwave:</span> $289</div>
                <div data-red-dot="true" data-x="740" data-y="263"><span>Wall unit:</span> $849</div>
                <div data-red-dot="true" data-x="880" data-y="143"><span>Patio set:</span> $270</div>
      		</div>
      	</div>
		<img src="images/two.jpg" alt="" border="" />
		<img src="images/three.jpg" alt="" border="" />
		<img src="images/four.jpg" alt="" border="" />
		<img src="images/five.jpg" alt="" border="" />
		<div data-red-dots-container="true">
            <img src="images/panel6.jpg" alt="" border="" />
            <div style="display: none">
               <div data-red-dot="true" data-x="700" data-y="270"><span>Contents value:</span> $282,000</div>
                <div data-red-dot="true" data-x="896" data-y="30"><span>Contents value:</span> $325,000</div>
                <div data-red-dot="true" data-x="560" data-y="120"><span>Contents value:</span> $285,000</div>
                <div data-red-dot="true" data-x="716" data-y="75"><span>Contents value:</span> $270,000</div>
                <div data-red-dot="true" data-x="820" data-y="205"><span>Contents value:</span> $370,000</div>
            </div>
        </div> 
		<img src="images/six.jpg" alt="" border="" />
	  </div>
	</div>

	<div class="main clearfix">
	  		<div class="leftCol  equal-column-2">
	  			<div class="left-top">
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
						<a class="prev" href="#"><img src="images/btn_previous.gif" border="0" alt="" /></a>
						<a class="next" href="#"><img src="images/btn_next.gif" border="0" alt="" /></a>
					</div>
				</div>
	  		</div>
	  		<div class="rightCol equal-column-2">
				<div class="blog">
					<jdoc:include type="modules" name="homeBlog" style="xhtml" />
				</div>
				<div class="right-top">
					<div class="whitepapers">
						<jdoc:include type="modules" name="homeWhitepaper" style="xhtml" />
					</div>
					<div class="videos">
						<jdoc:include type="modules" name="homeVideos" style="xhtml" />
					</div>
				</div>
	  		</div>
	</div>

	<?php else : ?>

	<div class="sectionalHeader">
		<jdoc:include type="modules" name="sectionalGraphic" style="xhtml" />
	</div>

	<div class="main">
	  <div class="leftMenu">
		<h2><?php echo $parentName; ?></h2>
		<jdoc:include type="modules" name="leftMenu" style="xhtml" />
	  </div>
	  
	  <div class="submitClaim">
	  	<jdoc:include type="modules" name="btnSubmitClaim" style="xhtml" />
	  </div>
	
	  <div class="library"><jdoc:include type="modules" name="library" style="xhtml" /></div>
			
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
  </div><!-- END .grid -->

  <!-- scripts concatenated and minified via build script -->
  	<script src="<?php echo JURI::base() ?>templates/em_skin/core/js/custom.js"></script>
  	<script src="<?php echo JURI::base() ?>templates/em_skin/core/js/plugins.js"></script>
  	<script type="text/javascript">
    	$(function () {
    		$.initRedDots();
    	});
    </script>
  <!-- end scripts -->
</body>
</html>