$(document).ready(function() {
    $(".changes1").click(function()
    {
        let valueBtn = $(this).text();
        if(valueBtn === "Add Comment")
        {
          $(".textarea1").css("display" , "block");
          $(this).text("Save Comment");
        }
        else
        {
            let textVal = $(".textarea1").val();
            if(textVal === "")
            {
                alert("Kindly type comment before saving")
            }
            else
            {
                $(".textVal").css("display" , "block");
                $(".textVal").text(`${textVal} `)
                $(".textarea1").css("display" , "none");
                $(this).css("display" , "none");
                $("#class1").css("display" , "flex")

            }
        }
    })
    $(".changes2").click(function()
    {
        let valueBtn = $(this).text();
        if(valueBtn === "Add Comment")
        {
          $(".textarea2").css("display" , "block");
          $(this).text("Save Comment");
        }
        else
        {
            let textVal = $(".textarea2").val();
            if(textVal === "")
            {
                alert("Kindly type comment before saving")
            }
            else
            {
                $(".textVal2").css("display" , "block");
                $(".textVal2").text(`${textVal} `)
                $(".textarea2").css("display" , "none");
                $(this).css("display" , "none");
                $("#class2").css("display" , "flex")

            }
        }
    })
    $(".changes3").click(function()
    {
        let valueBtn = $(this).text();
        if(valueBtn === "Add Comment")
        {
          $(".textarea3").css("display" , "block");
          $(this).text("Save Comment");
        }
        else
        {
            let textVal = $(".textarea3").val();
            if(textVal === "")
            {
                alert("Kindly type comment before saving")
            }
            else
            {
                $(".textVal3").css("display" , "block");
                $(".textVal3").text(`${textVal} `)
                $(".textarea3").css("display" , "none");
                $(this).css("display" , "none");
                $("#class3").css("display" , "flex")


            }
        }
    })
    $(".changes4").click(function()
    {
        let valueBtn = $(this).text();
        if(valueBtn === "Add Comment")
        {
          $(".textarea4").css("display" , "block");
          $(this).text("Save Comment");
        }
        else
        {
            let textVal = $(".textarea4").val();
            if(textVal === "")
            {
                alert("Kindly type comment before saving")
            }
            else
            {
                $(".textVal4").css("display" , "block");
                $(".textVal4").text(`${textVal}`)
                $(".textarea4").css("display" , "none");
                $(this).css("display" , "none");
                $("#class4").css("display" , "flex")


            }
        }
    })
  })