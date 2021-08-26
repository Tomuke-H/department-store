class CommentsController < ApplicationController
    # before_action :set_dep
    before_action :set_item
    before_action :set_com, only: [:show, :destroy, :edit, :update]

    def index
        render component: "Item", props: {item: @item, coms: @item.comments}
    end

    def show
        render component: "Com", props: {item: @item, com: @com}
    end

    def new
        render component: "ComNew", props: {item: @item}
    end

    def create
        com = @item.comments.new(com_params)
        if(com.save)
            redirect_to item_comments_path
        end
    end

    def edit
        render component: "ComEdit", props: {item: @item, com: @com}
    end

    def update
        @com.update(com_params)
        redirect_to item_comments_path
    end

    def destroy
        @com.destroy
        redirect_to item_comments_path
    end


    private
    
    def set_item
        @item = Item.find(params[:item_id])
    end
    
    # def set_dep
    #     @dep = @item.department
    # end

    def set_com
        @com = @item.comments.find(params[:id])
    end

    def com_params
        params.require(:comment).permit(:body, :author)
    end
end
