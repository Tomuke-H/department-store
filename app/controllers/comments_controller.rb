class CommentsController < ApplicationController
    before_action :set_dep
    before_action :set_item
    before_action :set_com, only: [:show, :destroy, :edit, :update]

    def index
        render component: "Coms", props: {dep: @dep, item: @item, coms: @item.coms}
    end

    def show
        render component: "Com", props: {dep: @dep, item: @item}
    end

    def new
        render component: "ComNew", props: {dep: @dep}
    end

    def create
        com = @item.comments.new(com_params)
        if(com.save)
            redirect_to department__items_comments_path
        end
    end

    def edit
        render component: "ComEdit", props: {dep: @dep, item: @item}
    end

    def update
        @com.update(com_params)
        redirect_to department_items_comments_path
    end

    def destroy
        @com.destroy
        redirect_to department_items_comments_path
    end


    private
    def set_dep
        @dep = Department.find(params[:department_id])
    end

    def set_item
        @item = @dep.items.find(params[:item_id])
    end

    def set_com
        @com = @item.comments.find(params[:id])
    end

    def com_params
        params.require(:comment).permit(:body)
    end
end
