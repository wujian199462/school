package com.school.school.test;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;


import java.io.File;
import java.io.IOException;

/**
 * 不是特别的精准，毕竟是开源的项目
 */
public class TesseractExample {

    public static void main(String[] args){
        String path = "E:/myIdea/school";

        File file = new File(path+"//2.png");
        ITesseract instance = new Tesseract();

        File directory = new File(path);
        String courseFile = null;
        try {
            courseFile = directory.getCanonicalPath();
        } catch (IOException e) {
            e.printStackTrace();
        }


        //设置训练库的位置
        instance.setDatapath(courseFile + "//tessdata");
        System.out.println(courseFile);

        instance.setLanguage("eng+chi_sim");//chi_sim ：简体中文， eng	根据需求选择语言库
        String result = null;
        try {
            long startTime = System.currentTimeMillis();
            result =  instance.doOCR(file);
            long endTime = System.currentTimeMillis();
            System.out.println("Time is：" + (endTime - startTime) + " 毫秒");
        } catch (TesseractException e) {
            e.printStackTrace();
        }

        System.out.println("result: ");
        System.out.println(result);
    }
}
