package com.school.school.thread;

/**
 *定义子类，继承Thread
 * 重写方法run
 *
 */
public class SubThread extends Thread{
    public void run(){
        for(int i=0;i<100;i++){
            System.out.println("t1..."+i);
        }
    }
}
