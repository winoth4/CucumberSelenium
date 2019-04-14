package Base;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

/**
 * Created by vinoth on 31/01/2019.
 */


public class ExtentReportUtil extends BaseUtil {

    String fileName = reportLocation + "extentreport.html";


    public void ExtentReport() {
        //First is to create Extent Reports
        extent = new ExtentReports();

        ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(fileName);
        htmlReporter.config().setTheme(Theme.DARK);
        htmlReporter.config().setDocumentTitle("Test report for Selenium Basic");
        htmlReporter.config().setEncoding("utf-8");
        htmlReporter.config().setReportName("Test report");

        extent.attachReporter(htmlReporter);

    }

    public void ExtentReportScreenshot()  {

        File scr = ((TakesScreenshot)Driver).getScreenshotAs(OutputType.FILE);
        File reportLoc=new File(reportLocation + "screenshot.png");
        try {
            Files.copy(scr.toPath(), reportLoc.toPath());
            scenarioDef.fail("details").addScreenCaptureFromPath(reportLocation + "screenshot.png");
        }

         catch (IOException e) {
            e.printStackTrace();
        }
    }


    public void FlushReport(){
        extent.flush();
    }




}
