// on each server startup add an array in memory for all the partners

Meteor.startup(
  function () {
  // code to run on server at startup
  // if (Partners.find().count() === 0) {
    Partners.remove({});
    var names = [
    "Eastern Shore National Wildlife Refuge (Paddlers Only - Kayaks Provided!)",
    "Charlottesville - Darden Towe Canoe Float - Boater Site (Paddlers Only)",
    "Eastern Shore Soil and Water Conservation District",
    "Gloucester Shoreline",
    "Izaak Walton League",
    "REI-Fairfax",
    "County of York",
    "County of York",
    "James City County",
    "James City County Pride",
    "Isle of Wight County",
    "Friends of the Rappahonock",
    "James City County",
    "US Army Corps of Engineers (Craney Island)",
    "Charlottesville - Pollock's Branch at S. First Street",
    "Charlottesville - Riverview Park",
    "Charlottesville - Meadow Creek",
    "Bear Creek Lake State Park (Cumberland, VA)",
    "High Bridge Trail State Park (Farmville, VA)",
    "Holliday Lake State Park (Appomattox, VA)",
    "James River State Park  (Amherst, VA)",
    "Lake Anna State Park (Spotsylvania, VA)",
    "Sailors Creek State Park  (Farmville, VA)",
    "Twin Lakes State Park  (Burkeville, VA)",
    "Pitts Creek (Chincoteague Area)",
    "TNC Living Shoreline - Oyster, VA",
    "Onancock Creek (Onancock, VA)",
    "Tangier Island",
    "Cape Charles",
    "Kiptopeke State Park (Cape Charles, VA)",
    "Willis Wharf (Exmore, VA)",
    "Airport Road (Melfa, VA)",
    "City of Hampton",
    "City of Hampton - Boater Site (Paddlers Only)",
    "City of Newport News",
    "City of Poquoson",
    "Fort Monroe  (Hampton, VA)",
    "HRSD Sites (Chesapeake, Norfolk, VA Beach)",
    "City of Chesapeake",
    "City of Suffolk",
    "City of Virginia Beach",
    "City of Virginia Beach - Boater Site (Paddlers Only)",
    "City of Virginia Beach - Challenging Site (+18 years old)",
    "City of Norfolk",
    "City of Norfolk - Boater Site (Paddlers Only)",
    "City of Norfolk - Challenging Site (+18 years old)",
    "City of Portsmouth",
    "Port of Virginia (Norfolk, VA)",
    "Smithfield Foods - North Facility (Smithfield, VA)",
    "Windsor Castle Park (Smithfield, VA)",
    "False Cape State Park (Sandbridge, VA)",
    "Willoughby Harbor Marina (Norfolk, VA)",
    "Crown Pointe Marina (Hayes, VA)",
    "Belle Isle State Park (Lancaster, VA)",
    "Caledon State Park (King George, VA)",
    "Westmoreland State Park  (Montross, VA)",
    "Reston",
    "Manassas",
    "Leesylvania State Park  (Dale City, VA)",
    "Mason Neck State Park (Woodbridge, VA)",
    "Shenandoah River State Park (Front Royal, VA)",
    "Chesterfield County",
    "James River Park System (Richmond, VA)",
    "James River Park System (Richmond, VA) - Boater Site (Paddlers Only)",
    "Pocahontas State Park (Chesterfield, VA)",
    "Powhatan State Park (Goochland, VA)",
    "Shenandoah River State Park (Front Royal, VA)",
    "Douthat State Park  (Clifton Forge, VA)",
    "Sky Meadows State Park  (Front Royal, VA)",
    "Colonial Parkway (Williamsburg, VA)",
    "Chippokes Plantation State Park  (Surry, VA)",
    "York River State Park (Williamsburg, VA)"];
    for (var i = 0; i < names.length; i++)
      Partners.insert({name: names[i]});

});
