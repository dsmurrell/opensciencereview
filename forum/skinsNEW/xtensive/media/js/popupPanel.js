// Popup panels

var keepPopupPanel = false;
var currentPopupId = false;
function TogglePopupPanel (PanelId)
{
  if (currentPopupId && currentPopupId != PanelId) TogglePopupPanel(currentPopupId);
	var PopupPanel = document.getElementById(PanelId);
	if (PopupPanel)
	{
		var display = PopupPanel.style.display;
		if (display == 'none' || !display)
		{
			PopupPanel.style.display = 'block';
			keepPopupPanel = true;
      currentPopupId = PanelId;
			
			document.onclick = ClosePopupPanel;
			document.onkeydown = EscapePopupPanel;

			if (PanelId == 'LoginSplashID') var isLoginFocused = LoginFieldFocus();
			PopupPanel.onclick = KeepPopupPanel;
		}
		else
		{
			PopupPanel.style.display = 'none';
    	currentPopupId = false;
		}
		return false;
	}
	else return true;	
}

function KeepPopupPanel()
{
	keepPopupPanel = true;
}

function ClosePopupPanel(event)
{
	if (keepPopupPanel)
	{
		keepPopupPanel = false;
		return;
	}
	var PopupPanel = document.getElementById (currentPopupId);
	if (!PopupPanel) return;
	PopupPanel.style.display = 'none';
	currentPopupId = false;

	document.onclick = null;
	document.onkeydown = null;
}

function ToggleDisplay (panelId)
{
  document.getElementById(panelId).style.display = (document.getElementById(panelId).style.display == 'none') ? 'block' : 'none' ;
}

function EscapePopupPanel (event)
{
	if (window.event) event = window.event;
	var code = event.keyCode ? event.keyCode : event.which ? event.which : null;
	if (code == 27)
	{
		var PopupPanel = document.getElementById (currentPopupId);
		if (!PopupPanel) return;
		PopupPanel.style.display = 'none';
		currentPopupId = false;

		document.onclick = null;
		document.onkeydown = null;
	}
}
